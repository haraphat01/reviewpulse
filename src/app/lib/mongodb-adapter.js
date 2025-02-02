import clientPromise from './mongodb';
import { ObjectId } from 'mongodb';

export default function MongoDBAdapter() {
  return {
    async createUser(user) {
      const client = await clientPromise;
      const result = await client
        .db()
        .collection('users')
        .insertOne({
          ...user,
          emailVerified: null,
        });
      return { ...user, id: result.insertedId.toString() };
    },

    async getUser(id) {
      const client = await clientPromise;
      const user = await client
        .db()
        .collection('users')
        .findOne({ _id: new ObjectId(id) });
      if (!user) return null;
      return { ...user, id: user._id.toString() };
    },

    async getUserByEmail(email) {
      const client = await clientPromise;
      const user = await client.db().collection('users').findOne({ email });
      if (!user) return null;
      return { ...user, id: user._id.toString() };
    },

    async getUserByAccount({ provider, providerAccountId }) {
      const client = await clientPromise;
      const account = await client
        .db()
        .collection('accounts')
        .findOne({ provider, providerAccountId });
      if (!account) return null;
      const user = await client
        .db()
        .collection('users')
        .findOne({ _id: new ObjectId(account.userId) });
      if (!user) return null;
      return { ...user, id: user._id.toString() };
    },

    async updateUser(user) {
      const client = await clientPromise;
      const result = await client
        .db()
        .collection('users')
        .findOneAndUpdate(
          { _id: new ObjectId(user.id) },
          { $set: user },
          { returnDocument: 'after' }
        );
      return { ...result.value, id: result.value._id.toString() };
    },

    async linkAccount(account) {
      const client = await clientPromise;
      await client.db().collection('accounts').insertOne({
        ...account,
        userId: new ObjectId(account.userId),
      });
      return account;
    },

    async createSession(session) {
      const client = await clientPromise;
      await client.db().collection('sessions').insertOne({
        ...session,
        userId: new ObjectId(session.userId),
      });
      return session;
    },

    async getSessionAndUser(sessionToken) {
      const client = await clientPromise;
      const session = await client
        .db()
        .collection('sessions')
        .findOne({ sessionToken });
      if (!session) return null;
      const user = await client
        .db()
        .collection('users')
        .findOne({ _id: new ObjectId(session.userId) });
      if (!user) return null;
      return {
        session,
        user: { ...user, id: user._id.toString() },
      };
    },

    async updateSession(session) {
      const client = await clientPromise;
      await client
        .db()
        .collection('sessions')
        .updateOne({ sessionToken: session.sessionToken }, { $set: session });
      return session;
    },

    async deleteSession(sessionToken) {
      const client = await clientPromise;
      await client
        .db()
        .collection('sessions')
        .deleteOne({ sessionToken });
    },
  };
} 
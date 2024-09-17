// // pages/api/saveData.tsx

// import type { NextApiRequest, NextApiResponse } from 'next';
// import { MongoClient } from 'mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { data } = req.body;

//     const client = new MongoClient(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
   

//     try {
//       await client.connect();

//       // Choose a name for your database
//       const database = client.db('user_data_db');

//       // Choose a name for your collection
//       const collection = database.collection('user_data_collection');

//       await collection.insertOne({ data });

//       res.status(201).json({ message: 'Data saved successfully!' });
//     } catch (error) {
//       res.status(500).json({ message: 'Something went wrong!' });
//     } finally {
//       await client.close();
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed!' });
//   }
// }

















import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  if (!cachedClient) {
    cachedClient = await new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).connect();
  }
  return cachedClient;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { data } = req.body;

    // Validate data
    if (!data) {
      return res.status(400).json({ message: 'No data provided!' });
    }

    try {
      const client = await connectToDatabase();

      // Choose a name for your database
      const database = client.db('user_data_db');

      // Choose a name for your collection
      const collection = database.collection('user_data_collection');

      await collection.insertOne({ data });

      res.setHeader('Content-Type', 'application/json');
      res.status(201).json({ message: 'Data saved successfully!' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Something went wrong!' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed!' });
  }
}

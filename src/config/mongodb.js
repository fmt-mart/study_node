/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

//minhnhat6403
//pTpKFh8eQSiP7YHB
import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'

//Khởi tạo một đối tượng trelloDatabaseInstance ban đầu là null (vì chúng ta chưa connect)
let trelloDatabaseInstance = null

//Khởi tạo một đối tượng mongoClientInstance để connect tới MongoDB
const mongoClientInstance = new MongoClient(env.MONGODDB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  //Gọi kết nối tới MongoDB Atlas với URI đã khai báo trong nhân của clientInstance
  await mongoClientInstance.connect()

  //Kết nối thành công thì lấy ra Database theo tên và gán ngược nó lại vào biến trelloDatabaseInstance ở trên của chúng ta
  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}

//Function GET_DB (không async) này có nhiệm vụ export ra cái Trello Database Instacnce sau khi đã connect thành công tới MongoDB
//để chúng ta sử dụng ở nhiều nơi khác nhau trong code
//Lưu ý phải đảm bảo chỉ luôn gọi cái getDB này sau khi đã kết nối thành công tới MongoDB
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect Database first!')
  return trelloDatabaseInstance
}

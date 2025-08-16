/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'
import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  try {
    // console.log('req.body: ', req.body)
    // console.log('req.query: ', req.query)
    // console.log('req.params: ', req.params)
    // console.log('req.files: ', req.files)
    // console.log('req.cookies: ', req.cookies)
    // console.log('req.jwtDecoded: ', req.jwtDecoded)

    //Dieu huong du lieu sang tang Service
    const createdBoard = await boardService.createNew(req.body)
    // console.log('createdBoard: ', createdBoard)
    //Co ket qua thi tra ve phia Client
    res.status(StatusCodes.CREATED).json(createdBoard)

    //Test error
    // throw new ApiError(StatusCodes.BAD_GATEWAY, 'trungquandev test error')

  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew
}

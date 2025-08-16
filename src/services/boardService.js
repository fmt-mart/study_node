/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { slugify } from '~/utils/formatters'

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    // Goi toi tang model de xu ly luu ban gi newBoard vao trong Database
    //

    //Lam them cac xu ly logic khac voi cac Collection khac tuy dac thu du an
    //Ban email, notification ve cho admin khi co 1 casi board moi duoc tao,...vv

    //Luon luon phai co return newBoard de tra ket qua len client
    return newBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew
}

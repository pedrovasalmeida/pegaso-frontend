// eslint-disable-next-line import/no-extraneous-dependencies

import axios from "axios"

const BASE_URL = 'https://pegaso-frontend.cdn.prismic.io/api/v2'

export const cmsClient = axios.create({
  baseURL: BASE_URL,
})

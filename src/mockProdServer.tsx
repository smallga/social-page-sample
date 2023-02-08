import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import MockMethod from './server/mock/test'

export function setupProdMockServer() {
  createProdMockServer([ ...MockMethod])
}
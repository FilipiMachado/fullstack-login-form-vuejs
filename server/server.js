import express from 'express'
import { envs, Client } from 'stytch'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
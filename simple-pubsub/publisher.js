#!/usr/bin/env node

'use strict'

const NATS = require('nats')
const nats = NATS.connect()

const interval = 5000

function sendRandomSuhu () {
  // generate random number beetwen 0 and 99
  const randomNumber = Math.floor(Math.random() * 100)
  const topic = 'jawabarat.bandung.suhu'
  nats.publish(topic, randomNumber.toString())
  console.log(`[PUBLISHER] Publish ${randomNumber} to ${topic}`)
}

function onConnectHandler () {
  console.log(`[PUBLISHER] Connected, ready for publish random suhu every ${interval/1000} Second`)
}

nats.on('connect', onConnectHandler)

// publish random number every 5 second
setInterval(sendRandomSuhu, 5000)

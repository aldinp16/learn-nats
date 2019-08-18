#!/usr/bin/env node

'use strict'

const NATS = require('nats')

const nats = NATS.connect()
const ID = process.argv[2]
const TOPIC = 'jawabarat.bandung.suhu'

// check if id filled
if (typeof ID === 'undefined') {
  console.error(`ID can't empty.`)
  process.exit(1)
}

function onConnectHandler () {
  console.log(`[SUBSCRIBER-${ID}] (${TOPIC}) Connected, ready receive message.`)
}

function handleBandungSuhuTopic (msg) {
  console.log(`[SUBSCRIBER-${ID}] (${TOPIC}) Received data: ${msg}`)
}

nats.on('connect', onConnectHandler)
nats.subscribe(TOPIC, handleBandungSuhuTopic)

/**
 * @see https://leetcode.com/problems/sender-with-largest-word-count
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
const largestWordCount = (messages, senders) => {
  const sendersCountSenders = {}
  let maxCountLetters = 0

  for (let i = 0; i < senders.length; i++) {
    const sender = senders[i]

    let countOfLetters = (sendersCountSenders[sender] ?? 0) + messages[i].split(' ').length

    sendersCountSenders[sender] = countOfLetters

    if (countOfLetters > maxCountLetters) {
      maxCountLetters = countOfLetters
    }
  }

  console.log(sendersCountSenders)

  const sendersWithMaxLetters = Object.keys(sendersCountSenders).filter(
    key => sendersCountSenders[key] === maxCountLetters,
  )

  return sendersWithMaxLetters.sort().at(-1)
}

console.log(
  largestWordCount(
    ['Hello userTwooo', 'Hi userThree', 'Wonderful day Alice', 'Nice day userThree'],
    ['Alice', 'userTwo', 'userThree', 'Alice'],
  ),
)
console.log(
  largestWordCount(
    ['How is leetcode for everyone', 'Leetcode is useful for practice'],
    ['Bob', 'Charlie'],
  ),
)
console.log(
  largestWordCount(
    [
      'tP x M VC h lmD',
      'D X XF w V',
      'sh m Pgl',
      'pN pa',
      'C SL m G Pn v',
      'K z UL B W ee',
      'Yf yo n V U Za f np',
      'j J sk f qr e v t',
      'L Q cJ c J Z jp E',
      'Be a aO',
      'nI c Gb k Y C QS N',
      'Yi Bts',
      'gp No g s VR',
      'py A S sNf',
      'ZS H Bi De dj dsh',
      'ep MA KI Q Ou',
    ],
    [
      'OXlq',
      'IFGaW',
      'XQPeWJRszU',
      'Gb',
      'HArIr',
      'Gb',
      'FnZd',
      'FnZd',
      'HArIr',
      'OXlq',
      'IFGaW',
      'XQPeWJRszU',
      'EMoUs',
      'Gb',
      'EMoUs',
      'EMoUs',
    ],
  ),
)

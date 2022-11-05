/**
 * @see https://leetcode.com/problems/defanging-an-ip-address
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = address => address.replaceAll('.', '[.]')

console.log(defangIPaddr('1.1.1.1'))
console.log(defangIPaddr('255.100.50.0'))

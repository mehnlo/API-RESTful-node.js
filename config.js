module.exports = {
  port: process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 5000,
  server_ip_address: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  db: process.env.MONGODB_URI || process.env.MONGO_URL || 'mongodb://localhost:27017/shop',
  SECRET_TOKEN: '1q2w3e4r5t6y;H0sT14'
}

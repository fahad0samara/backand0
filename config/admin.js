module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dec3dded8896c69151f69a26a1cacdcd'),
  },
});

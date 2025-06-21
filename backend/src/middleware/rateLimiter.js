import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {

  try {
    const {success} = await ratelimit.limit("my-rate-limit"); // no auth or user id right now, hence my-rate-limit placeholder

    if(!success) {
      return res.status(429).json({
        message:"Too many requests"
      });
    }

    next()

  } catch (error) {
    console.log("Rate limit error", error);
    next(error);
  }

}

export default rateLimiter

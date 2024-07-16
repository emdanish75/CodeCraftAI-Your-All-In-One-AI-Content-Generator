/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://codecraftai_owner:wKdxl1XZH0Tz@ep-curly-rice-a5jrpu9o.us-east-2.aws.neon.tech/codecraftai?sslmode=require',
    }
  };
  
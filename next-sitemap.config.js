/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://bc-77-nextjs.vercel.app/", // URL chính của trang web
  generateRobotsTxt: true, // Tạo file robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*", // Áp dụng cho tất cả các user-agent
        allow: "/", // Cho phép truy cập tất cả các trang
      },
      {
        userAgent: "*", // Áp dụng cho tất cả các user-agent
        disallow: "/admin", // không Cho phép truy cập tất cả các trang
      },
    ],
  },
  sitemapSize: 7000, // Giới hạn số lượng URL trong một file sitemap (mặc định là 5000)
  generateIndexSitemap: true, // Tạo file sitemap-index.xml nếu có nhiều sitemap
  exclude: [
    "/admin*", // Loại trừ các trang bắt đầu với /admin
    "/secret-page", // Loại trừ một trang cụ thể
  ],
  transform: async (config, path) => {
    // Tùy chỉnh dữ liệu từng URL trong sitemap
    return {
      loc: path, // URL
      changefreq: "daily", // Tần suất thay đổi (daily, weekly, monthly, etc.)
      priority: 0.7, // Độ ưu tiên của trang (0.0 - 1.0)
      lastmod: new Date().toISOString(), // Ngày cập nhật cuối
    };
  },
};

module.exports = config;

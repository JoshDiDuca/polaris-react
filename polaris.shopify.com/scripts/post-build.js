const fs = require('fs');
const path = require('path');

// Create the standalone directory
fs.mkdirSync('./.next/standalone/polaris.shopify.com/', { recursive: true });

// Copy public directory
fs.cpSync('public', './.next/standalone/polaris.shopify.com/public', { recursive: true });

// Check if .next/static exists and copy it
if (fs.existsSync('.next/static')) {
  fs.mkdirSync('./.next/standalone/polaris.shopify.com/.next', { recursive: true });
  fs.cpSync('.next/static', './.next/standalone/polaris.shopify.com/.next/static', { recursive: true });
}

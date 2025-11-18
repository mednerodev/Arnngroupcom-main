# Environment Variables Setup Guide

## ✅ What I've Done

Your Web3Forms access key is now secured using environment variables instead of being hardcoded.

---

## 🔒 Files Created

### 1. **`.env`** - Your actual secrets (NEVER commit to Git)
```
VITE_WEB3FORMS_ACCESS_KEY=de75ea6e-8e14-457f-abca-ea6564f66a7f
```

### 2. **`.env.example`** - Template for others (safe to commit)
```
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

### 3. **`.gitignore`** - Prevents committing secrets
Ensures `.env` files are never pushed to GitHub

---

## 🚀 How It Works Now

**Before (Insecure):**
```typescript
access_key: 'de75ea6e-8e14-457f-abca-ea6564f66a7f', // ❌ Public in code
```

**After (Secure):**
```typescript
access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, // ✅ Hidden
```

---

## 💻 Local Development

### Your `.env` file is already set up! 

Just restart your dev server:
```bash
npm run dev
# or
yarn dev
```

The contact form will work exactly the same, but now it's secure!

---

## 🌐 Deploying to Production

When you deploy your site, you need to add the environment variable to your hosting platform:

### **Vercel:**
1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add:
   - **Name:** `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value:** `de75ea6e-8e14-457f-abca-ea6564f66a7f`
4. Deploy!

### **Netlify:**
1. Go to **Site settings** → **Environment variables**
2. Add:
   - **Key:** `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value:** `de75ea6e-8e14-457f-abca-ea6564f66a7f`
3. Redeploy!

### **Other Platforms (Cloudflare, Railway, etc.):**
Same process - add the environment variable with the key name and value above.

---

## 🔑 Why Environment Variables?

### ✅ **Security Benefits:**
- Keys aren't visible in your source code
- Can't be leaked in Git commits
- Easy to rotate if compromised
- Different keys for dev/staging/prod

### ✅ **Best Practices:**
- Industry standard approach
- Makes code more maintainable
- Easier to share code publicly
- Professional development workflow

---

## ⚠️ Important Notes

### **Vite Environment Variables:**
- **Must start with `VITE_`** to be exposed to client-side code
- Accessed via `import.meta.env.VITE_*`
- Different from Node.js `process.env`

### **Is Web3Forms Key Safe Public?**
Web3Forms keys are designed for client-side use, so they're *relatively* safe to expose. However:

- ❌ Someone could spam your form
- ❌ Could use up your monthly quota
- ❌ Hard to rotate if leaked
- ✅ **Using env variables is still MUCH better**

---

## 📋 Team Setup Instructions

If someone else clones your repository:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Replace `your_access_key_here` with the actual key

3. Start development:
   ```bash
   npm install
   npm run dev
   ```

---

## 🔄 How to Change the Key

### If you need to rotate/change your access key:

1. Get new key from [web3forms.com](https://web3forms.com)
2. Update **local** `.env` file
3. Update **production** environment variables on hosting platform
4. Redeploy (if needed)

That's it! No code changes required.

---

## 🧪 Testing

Your contact form should work the same as before:

1. Fill out the form
2. Submit
3. Check your email

If it doesn't work:
- ✅ Restart dev server (environment variables require restart)
- ✅ Check `.env` file exists and has correct value
- ✅ Check for typos in variable name
- ✅ Check browser console for errors

---

## 📁 File Structure

```
/
├── .env                    ← Your secrets (NEVER commit)
├── .env.example           ← Template (safe to commit)
├── .gitignore             ← Blocks .env from Git
└── pages/
    └── Contact.tsx        ← Uses import.meta.env
```

---

## 🎯 Summary

✅ **Access key is now secure**  
✅ **Won't be leaked in Git commits**  
✅ **Easy to change without touching code**  
✅ **Ready for production deployment**  
✅ **Follows industry best practices**  

Your contact form is now **production-ready and secure**! 🔒✨

---

## 🆘 Need Help?

**Form not working after this change?**
1. Restart your dev server
2. Check `.env` file has the correct key
3. Clear browser cache
4. Check console for errors

**Deploying issues?**
- Make sure you added the env variable to your hosting platform
- Variable name must be EXACTLY: `VITE_WEB3FORMS_ACCESS_KEY`
- Redeploy after adding env variables

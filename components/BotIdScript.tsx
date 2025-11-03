/**
 * BotID Client Component
 * 
 * BotID server-side verification works automatically on Vercel's platform
 * via the checkBotId() function in API routes.
 * 
 * The client-side script (https://botid.vercel.app/api.js) is optional
 * and not required for server-side bot detection. Removing it eliminates
 * CORS/OpaqueResponseBlocking console errors while maintaining full protection.
 * 
 * Server-side BotID protection is active in app/api/contact/route.ts
 */
export default function BotIdScript() {
    // BotID server-side verification is handled in API routes
    // No client-side script needed - this eliminates console errors
    return null;
}


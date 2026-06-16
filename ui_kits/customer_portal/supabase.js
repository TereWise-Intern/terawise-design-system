// ============================================================
// TeraWise · Supabase Client (Customer Portal)
// Loaded as a plain <script> before any Babel/JSX files.
// ============================================================
(function () {
  var SUPABASE_URL = 'https://yecijqecmabjtgpwfroy.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_WpuOkrhxrKQWCbgOosVcWQ_VJyJWCVi';
  var createClient = window.supabase.createClient;

  window.sb = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
      storage: window.localStorage,
      storageKey: 'terawise-cp-auth'   // 客戶端專用，保持登入、避免自動登出
    }
  });
})();

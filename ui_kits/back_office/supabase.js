// ============================================================
// TeraWise · Supabase Client (Back Office)
// Loaded as a plain <script> before any Babel/JSX files.
// ============================================================
(function () {
  var SUPABASE_URL = 'https://yecijqecmabjtgpwfroy.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_WpuOkrhxrKQWCbgOosVcWQ_VJyJWCVi';
  var createClient = window.supabase.createClient;

  // Main session-aware client
  window.sb = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
      storage: window.localStorage,
      storageKey: 'terawise-bo-auth'   // 後台專用，保持登入、避免自動登出
    }
  });

  // Create a new user WITHOUT affecting the current admin session.
  // Uses an ephemeral client instance so signUp doesn't hijack the session.
  window.createUserAccount = function (email, password, metadata) {
    var tmp = createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false }
    });
    return tmp.auth.signUp({
      email: email,
      password: password,
      options: { data: metadata || {} }
    });
  };
})();

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./samples/', true, /\.md$/));

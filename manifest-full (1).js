export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DQMSGZPz.js",app:"_app/immutable/entry/app.DOFIYGw8.js",imports:["_app/immutable/entry/start.DQMSGZPz.js","_app/immutable/chunks/DdHrR9Bk.js","_app/immutable/chunks/DIVXN5K-.js","_app/immutable/chunks/DLvfwXRK.js","_app/immutable/chunks/BV5mPcHr.js","_app/immutable/chunks/BWFseONC.js","_app/immutable/entry/app.DOFIYGw8.js","_app/immutable/chunks/BAeus0NJ.js","_app/immutable/chunks/DLvfwXRK.js","_app/immutable/chunks/BV5mPcHr.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DIVXN5K-.js","_app/immutable/chunks/BWFseONC.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

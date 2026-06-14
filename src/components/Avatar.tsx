import { motion } from "framer-motion";

export default function Avatar() {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute h-72 w-72 rounded-full bg-red-500/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-red-500/30 bg-gradient-to-br from-neutral-900 to-black shadow-2xl shadow-red-500/20 sm:h-72 sm:w-72">
          <svg
            viewBox="0 0 200 200"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5d0c5" />
                <stop offset="100%" stopColor="#e8b4a8" />
              </linearGradient>
              <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a1a2e" />
                <stop offset="100%" stopColor="#2d2d44" />
              </linearGradient>
              <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1f1f1f" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>
              <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx="100" cy="100" r="95" fill="url(#glowGrad)" />

            <ellipse cx="100" cy="130" rx="55" ry="45" fill="url(#shirtGrad)" />
            <ellipse cx="100" cy="130" rx="55" ry="45" fill="none" stroke="#ef4444" strokeWidth="0.5" opacity="0.3" />

            <motion.ellipse
              cx="100"
              cy="85"
              rx="42"
              ry="48"
              fill="url(#skinGrad)"
              animate={{ scale: [1, 1.01, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <ellipse cx="100" cy="55" rx="48" ry="35" fill="url(#hairGrad)" />
            <path
              d="M 55 60 Q 60 30 100 25 Q 140 30 145 60 Q 140 50 100 48 Q 60 50 55 60"
              fill="url(#hairGrad)"
            />

            <motion.ellipse
              cx="82"
              cy="82"
              rx="5"
              ry="6"
              fill="#2d2d44"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.ellipse
              cx="118"
              cy="82"
              rx="5"
              ry="6"
              fill="#2d2d44"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
            />

            <circle cx="83" cy="80" r="2" fill="#ffffff" opacity="0.8" />
            <circle cx="119" cy="80" r="2" fill="#ffffff" opacity="0.8" />

            <motion.path
              d="M 88 100 Q 100 108 112 100"
              fill="none"
              stroke="#c97b6b"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ d: ["M 88 100 Q 100 108 112 100", "M 90 100 Q 100 105 110 100", "M 88 100 Q 100 108 112 100"] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <ellipse cx="75" cy="92" rx="6" ry="3" fill="#f0a898" opacity="0.4" />
            <ellipse cx="125" cy="92" rx="6" ry="3" fill="#f0a898" opacity="0.4" />

            <rect x="88" y="115" width="24" height="8" rx="4" fill="#111" opacity="0.6" />
            <circle cx="100" cy="119" r="2" fill="#ef4444" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>

          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(135deg, transparent 40%, rgba(239,68,68,0.05) 50%, transparent 60%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.div
          className="absolute -right-4 -bottom-2 h-5 w-5 rounded-full border-2 border-black bg-green-500"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute -top-4 -left-8 max-w-[220px] sm:-left-16 sm:max-w-[260px]"
      >
        <div className="glass-card relative rounded-2xl p-4 shadow-xl shadow-red-500/10">
          <div className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 border-r border-b border-white/8 bg-white/3 backdrop-blur-md" />
          <p className="text-xs leading-relaxed text-neutral-300 sm:text-sm">
            Welcome to my portfolio. I'm Kusumapriya, a Computer Science student passionate about
            building innovative software solutions.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

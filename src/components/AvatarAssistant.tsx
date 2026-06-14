import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, RotateCcw } from "lucide-react";

const INTRO_TEXT =
  "Hello and welcome to my portfolio. I am Kusumapriya Chitikila, a Computer Science and Engineering student at Vel Tech University with a CGPA of 9.09. I am passionate about software development, backend engineering, Java, Python, SQL, and modern web technologies. I enjoy building practical software solutions and continuously improving my technical skills. Thank you for visiting my portfolio.";

function pickFemaleVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const preferred = voices.find(
    (v) =>
      v.lang.startsWith("en") &&
      (/female|samantha|zira|susan|karen|victoria|aria|jenny|sara/i.test(v.name) ||
        v.name.includes("Google UK English Female"))
  );
  if (preferred) return preferred;

  return voices.find((v) => v.lang.startsWith("en")) ?? voices[0];
}

function SpeakingIndicator() {
  return (
    <div className="flex items-end gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-0.5 rounded-full bg-red-400"
          animate={{ height: [4, 14, 6, 16, 4] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

interface AvatarAssistantProps {
  autoSpeak?: boolean;
}

export default function AvatarAssistant({ autoSpeak = true }: AvatarAssistantProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [bubbleText, setBubbleText] = useState(INTRO_TEXT);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const hasAutoSpoken = useRef(false);

  const stopSpeaking = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  const speak = useCallback(
    (text: string = INTRO_TEXT) => {
      if (isMuted || !window.speechSynthesis) return;

      stopSpeaking();
      setShowBubble(true);
      setBubbleText(text);

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.volume = 1;

      const voice = pickFemaleVoice();
      if (voice) utterance.voice = voice;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [isMuted, stopSpeaking]
  );

  const handleReplay = () => {
    if (isMuted) {
      setIsMuted(false);
      setTimeout(() => speak(), 50);
      return;
    }
    speak();
  };

  const toggleMute = () => {
    if (!isMuted) stopSpeaking();
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    const loadVoices = () => pickFemaleVoice();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    loadVoices();
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
      stopSpeaking();
    };
  }, [stopSpeaking]);

  useEffect(() => {
    if (!autoSpeak || hasAutoSpoken.current) return;

    const timer = setTimeout(() => {
      hasAutoSpoken.current = true;
      speak();
    }, 800);

    return () => clearTimeout(timer);
  }, [autoSpeak, speak]);

  return (
    <div className="relative flex w-full max-w-sm flex-col items-center sm:max-w-md">
      {/* Speech bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="relative z-20 mb-4 w-full"
          >
            <div className="glass-card relative rounded-2xl border border-red-500/20 p-4 shadow-xl shadow-red-500/10 sm:p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${isSpeaking ? "bg-red-400 animate-pulse" : "bg-green-500"}`}
                  />
                  <span className="text-xs font-medium tracking-wider text-red-400 uppercase">
                    {isSpeaking ? "Speaking" : "AI Assistant"}
                  </span>
                </div>
                {isSpeaking && <SpeakingIndicator />}
              </div>
              <p className="max-h-32 overflow-y-auto text-xs leading-relaxed text-neutral-300 sm:text-sm sm:leading-relaxed">
                {bubbleText}
              </p>
              <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-r border-b border-white/8 bg-white/3 backdrop-blur-md" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute h-64 w-64 rounded-full bg-red-500/10 blur-3xl sm:h-72 sm:w-72"
          animate={{
            scale: isSpeaking ? [1, 1.2, 1] : [1, 1.12, 1],
            opacity: isSpeaking ? [0.4, 0.7, 0.4] : [0.3, 0.5, 0.3],
          }}
          transition={{ duration: isSpeaking ? 1.5 : 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative"
          animate={{
            y: [0, -6, 0],
            scale: isSpeaking ? [1, 1.02, 1] : [1, 1.01, 1],
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: isSpeaking ? 1.2 : 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {/* Speaking ring */}
          <AnimatePresence>
            {isSpeaking && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: [0.5, 0.2, 0.5], scale: [1, 1.08, 1] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 rounded-full border-2 border-red-500/40"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: [0.3, 0.1, 0.3], scale: [1, 1.15, 1] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="absolute -inset-3 rounded-full border border-red-400/20"
                />
              </>
            )}
          </AnimatePresence>

          <div
            className={`relative h-56 w-56 overflow-hidden rounded-full border-2 bg-gradient-to-br from-neutral-900 to-black shadow-2xl sm:h-64 sm:w-64 ${
              isSpeaking
                ? "border-red-400/60 shadow-red-500/40"
                : "border-red-500/30 shadow-red-500/20"
            }`}
          >
            <svg viewBox="0 0 200 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="aa-skin" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f5d0c5" />
                  <stop offset="100%" stopColor="#e8b4a8" />
                </linearGradient>
                <linearGradient id="aa-hair" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a1a2e" />
                  <stop offset="100%" stopColor="#3d2b4f" />
                </linearGradient>
                <linearGradient id="aa-shirt" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1f1f1f" />
                  <stop offset="100%" stopColor="#0a0a0a" />
                </linearGradient>
                <radialGradient id="aa-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="100" cy="100" r="95" fill="url(#aa-glow)" />

              <ellipse cx="100" cy="132" rx="52" ry="42" fill="url(#aa-shirt)" />
              <ellipse
                cx="100"
                cy="132"
                rx="52"
                ry="42"
                fill="none"
                stroke="#ef4444"
                strokeWidth="0.5"
                opacity="0.35"
              />

              <motion.ellipse
                cx="100"
                cy="86"
                rx="40"
                ry="46"
                fill="url(#aa-skin)"
                animate={{ scaleY: [1, 1.015, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <ellipse cx="100" cy="52" rx="46" ry="32" fill="url(#aa-hair)" />
              <path
                d="M 54 58 Q 58 28 100 22 Q 142 28 146 58 Q 140 46 100 44 Q 60 46 54 58"
                fill="url(#aa-hair)"
              />
              <path
                d="M 54 58 Q 48 75 52 95 Q 58 80 62 65 Z"
                fill="url(#aa-hair)"
                opacity="0.9"
              />
              <path
                d="M 146 58 Q 152 75 148 95 Q 142 80 138 65 Z"
                fill="url(#aa-hair)"
                opacity="0.9"
              />

              <motion.ellipse
                cx="81"
                cy="83"
                rx="5.5"
                ry="6.5"
                fill="#2d2d44"
                animate={{ scaleY: [1, 0.08, 1] }}
                transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 3.5 }}
              />
              <motion.ellipse
                cx="119"
                cy="83"
                rx="5.5"
                ry="6.5"
                fill="#2d2d44"
                animate={{ scaleY: [1, 0.08, 1] }}
                transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 3.5 }}
              />

              <circle cx="82" cy="81" r="2.2" fill="#ffffff" opacity="0.85" />
              <circle cx="120" cy="81" r="2.2" fill="#ffffff" opacity="0.85" />

              <motion.path
                fill="none"
                stroke="#c97b6b"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  d: isSpeaking
                    ? [
                        "M 86 101 Q 100 112 114 101",
                        "M 88 100 Q 100 115 112 100",
                        "M 90 102 Q 100 108 110 102",
                        "M 86 101 Q 100 112 114 101",
                      ]
                    : [
                        "M 88 101 Q 100 108 112 101",
                        "M 90 101 Q 100 105 110 101",
                        "M 88 101 Q 100 108 112 101",
                      ],
                }}
                transition={{
                  duration: isSpeaking ? 0.35 : 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <ellipse cx="74" cy="93" rx="7" ry="3.5" fill="#f0a898" opacity="0.35" />
              <ellipse cx="126" cy="93" rx="7" ry="3.5" fill="#f0a898" opacity="0.35" />

              <rect x="86" y="116" width="28" height="9" rx="4.5" fill="#111" opacity="0.65" />
              <motion.circle
                cx="100"
                cy="120.5"
                r="2.5"
                fill="#ef4444"
                animate={{ opacity: isSpeaking ? [1, 0.3, 1] : [0.8, 0.3, 0.8] }}
                transition={{ duration: isSpeaking ? 0.5 : 2, repeat: Infinity }}
              />
            </svg>

            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, transparent 40%, rgba(239,68,68,0.06) 50%, transparent 60%)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <motion.div
            className={`absolute -right-3 -bottom-1 h-5 w-5 rounded-full border-2 border-black ${
              isSpeaking ? "bg-red-400" : "bg-green-500"
            }`}
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: isSpeaking ? 0.8 : 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="mt-5 flex items-center gap-3"
      >
        <button
          type="button"
          onClick={toggleMute}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium text-neutral-300 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10 hover:text-white sm:text-sm"
          aria-label={isMuted ? "Unmute assistant" : "Mute assistant"}
          data-cursor-hover
        >
          {isMuted ? <VolumeX size={16} className="text-red-400" /> : <Volume2 size={16} />}
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <button
          type="button"
          onClick={handleReplay}
          disabled={isSpeaking}
          className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-xs font-medium text-red-400 transition-all duration-300 hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
          aria-label="Replay introduction"
          data-cursor-hover
        >
          <RotateCcw size={16} className={isSpeaking ? "animate-spin" : ""} />
          Replay Intro
        </button>
      </motion.div>
    </div>
  );
}

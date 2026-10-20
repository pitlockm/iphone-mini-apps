# Mini Apps

Seven lightweight, single-file web apps. No build step, no dependencies, no accounts.
All progress saves in the browser on the device (localStorage).

| App | Folder | What it does |
|---|---|---|
| Life RPG | `life-rpg/` | Habitica-style life game: Habits, Dailies, focus sessions, side quests & multi-stage Major Quests; procrastination bounty (+2% per other task, capped), 48h deadline lock, HP stakes & death penalty, gold shop with in-game gear/pets and self-priced real-world rewards, honor-system screen-time budgets |
| Focus Quest | `focus/` | Pomodoro-style focus timer as a boss fight — XP & levels |
| Poker Trainer | `poker/` | Texas Hold'em preflop decisions by position (simplified chart) |
| Video Poker Trainer | `video-poker/` | Jacks or Better with optimal-hold coaching hints |
| Blackjack Trainer | `blackjack/` | Playable blackjack graded against basic strategy (no splits in v1) |
| Chess Opening Trainer | `chess/` | Italian Game, London System, French Defense — pick the book move |
| Fake Money Sportsbook | `sportsbook/` | $1,000 fake bankroll, fictional slate, simulated settlement |

## Play it locally first
Open `index.html` in any browser, or run a tiny server:

```bash
cd iphone-mini-apps
python3 -m http.server 8000
# then open http://localhost:8000
```

## Put it on GitHub Pages (free, works on iPhone)

1. Create a new GitHub repo (e.g. `iphone-mini-apps`) — public repos get free Pages.
2. Push this folder as the repo root:

```bash
cd iphone-mini-apps
git init && git add . && git commit -m "Mini apps v1"
git branch -M main
git remote add origin https://github.com/<your-username>/iphone-mini-apps.git
git push -u origin main
```

3. Repo → Settings → Pages → Build and deployment → Source: **Deploy from a branch**, Branch: `main` / `/ (root)`.
4. After ~1 minute your site is live at `https://<your-username>.github.io/iphone-mini-apps/`

## Play on iPhone like an app
1. Open the Pages URL in **Safari**.
2. Share button → **Add to Home Screen**.
3. Each game can be added separately (open the game first, then Add to Home Screen) or just bookmark the hub.

## Known v1 simplifications
- Poker: preflop only, tight-aggressive training chart (not GTO/solvers).
- Blackjack: no splitting, no insurance; dealer stands on all 17s; coach uses standard basic strategy for hard/soft totals.
- Video poker: 9/6-style paytable scaled to a 5-credit bet; coach gives a strong hold, not a full EV table.
- Sportsbook: fictional teams; results simulated from implied odds with a small house edge. Fake money only.
- Chess: three lines, 12 half-moves each, move-choice quiz (not a full board drag-and-drop engine).

## Ideas for v2
- PWA manifest + icons so Add to Home Screen looks/feels native, offline caching via a service worker
- Poker: postflop hand-reading quizzes; Video poker: exact EV for every hold
- Blackjack: splits + counting trainer (Hi-Lo running count mode)
- Chess: paste-your-own PGN lines; Sportsbook: parlays + bet history stats
- Focus Quest: daily streaks, Apple Health–friendly session log export

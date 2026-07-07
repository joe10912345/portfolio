# Joel Chang 作品集 — 換電腦工作 & 維護指南

> 這是你的網站「線上正本」。網站上線位置 👉 **https://joe10912345.github.io/portfolio/**
>
> 換一台電腦工作時，**先讀這一頁**，照著做就對了。

---

## ⭐ 黃金守則（記這一句就好）

> **開工前先「抓最新」，收工前先「上傳」。**

正本永遠只有一份，在 GitHub 上。任何電腦、任何時候，都以 GitHub 這份為準。
Google Drive 只是私人備份，**不是**維護網站的地方。

---

## 🆕 第一次用一台新電腦（只做一次）

用 **GitHub Desktop**（有介面、不用打指令，最適合）：

1. 到 https://desktop.github.com 下載安裝 **GitHub Desktop**
2. 打開後登入你的帳號 **joe10912345**
3. 上方選單 `File` → `Clone repository`
4. 選 **portfolio** → 選一個要放的資料夾（例如桌面）→ 按 `Clone`
5. 等它把整包抓下來（約 300MB，第一次會跑一下）

完成後，這台電腦就有一份完整網站了。

---

## 🔄 每次「開工前」— 抓最新版

避免這台改的跟另一台打架。開工前一定先做：

1. 打開 **GitHub Desktop**
2. 確認上方 `Current branch` 是 **main**
3. 按右上角 **`Fetch origin`**
4. 如果它變成 **`Pull origin`**（代表雲端有新東西）→ 再按一下，就抓下來了

> 沒有變成 Pull origin，代表你已經是最新版，直接開工。

---

## 🚀 每次「改完」— 上傳讓網站更新

1. 在資料夾裡改檔案（HTML、圖片、或 `文案/` 裡的文字）
2. 回到 **GitHub Desktop**，左邊會自動列出「哪些檔案變了」
3. 左下角填一句簡短說明（例如：`更新首頁文案`）→ 按 **`Commit to main`**
4. 按右上角 **`Push origin`**
5. 等 1～2 分鐘，網站 https://joe10912345.github.io/portfolio/ 就更新了
   （看不到變化時按 `Ctrl` + `F5` 強制重新整理）

---

## 📱 在健身房 / 手機 / 借來的電腦（不想裝東西時）

直接用瀏覽器，跟「把檔案丟進雲端資料夾」一樣：

1. 打開 https://github.com/joe10912345/portfolio
2. 點綠色 `Add file` → `Upload files`
3. 把檔案**拖進去**
4. 下方按 `Commit changes` → 網站自動更新

> 適合改幾個檔案的小修改。大搬家還是用電腦上的 GitHub Desktop 比較好。

---

## 🤖 有開 Claude Code 的話（最省事）

在資料夾裡開 Claude Code，直接用中文說：

- 「**幫我抓最新版**」 → 我幫你把雲端最新內容拉下來
- 「**幫我上線**」 → 我幫你把改動推上 GitHub、更新網站

你完全不用碰任何指令。

---

## 📁 這個資料夾有什麼（快速地圖）

| 檔案 / 資料夾 | 是什麼 |
|---|---|
| `index.html` | 首頁（目前上線版本 A） |
| `index-b.html` | 首頁的另一個設計版本（比較用，未上線） |
| `defense.html` 等 6 個 | 作品分類頁 |
| 22 個作品頁（`moai-router.html`…） | 各專案的詳細頁 |
| `about.html` / `contact.html` | 關於 / 聯絡 |
| `assets/` | 共用樣式 `site.css` + 全部圖片 |
| `文案/` | **你編輯文字的地方**（每頁一個 txt）。改完要叫 Claude「同步進網站」才會生效 |
| `CLAUDE.md` | 給 Claude 讀的專案說明（最完整的背景） |
| `作品集網站_新手上線指南.md` | 更詳細的部署 / 客製教學 |

---

## ❓ 常見狀況

- **「我在另一台改過，忘了這台是不是最新？」** → 開工前按 `Fetch origin`，永遠不吃虧。
- **「兩台都改了同一個檔案，GitHub Desktop 說有衝突(conflict)？」** → 別亂動，開 Claude Code 說「有衝突幫我處理」。
- **「網站沒更新？」** → 等 1～2 分鐘 GitHub Pages 建置，再按 `Ctrl`+`F5`。
- **「可以只用 Google Drive 維護嗎？」** → 不行。Drive 不能當網站主機，網站只從 GitHub 讀檔案。Drive 當備份就好。

# Joel Chang 作品集 — 維護指南（換電腦先讀這頁）

> 網站上線位置 👉 **https://joe10912345.github.io/portfolio/**

---

## ⭐ 你只要記這一句

> **在 Drive 資料夾裡改東西 → 開 Claude Code 說「幫我上線」→ 網站就更新。**

你不用碰 git、不用手動上傳。剩下的交給 Claude。

---

## 🗺 三個地方，各做各的（別搞混）

| 地方 | 路徑 | 角色 | 你會碰它嗎 |
|---|---|---|---|
| **Google Drive** | `G:\我的雲端硬碟\Web` | 你**工作的地方**（正本、最新版）。任何裝了 Drive 的電腦都同步 | ✅ 只在這裡改 |
| **桌面 git 橋** | `C:\Users\joe10\Desktop\Web` | 通往 GitHub 的**隱形橋**，Claude 拿來推送用 | ❌ 不要碰 |
| **GitHub** | github.com/joe10912345/portfolio | 網站**真正上線**的地方，全世界看得到 | 看網站就好 |

**為什麼要有「橋」？** 因為 Drive 沒辦法把更新送上 GitHub，而 git 又不能放進 Drive（會被同步弄壞）。
所以桌面留一個小小的 git 資料夾當橋，Claude 幫你把 Drive 最新內容推上 GitHub。你平常不用管它。

---

## ✏️ 怎麼改網站

1. 打開 **`G:\我的雲端硬碟\Web`**（你的工作資料夾）
2. 改 HTML、換圖，或改 `文案/` 裡的文字
3. 在這個資料夾開 **Claude Code**，說一句「**幫我上線**」
4. 等 1～2 分鐘，網站 https://joe10912345.github.io/portfolio/ 就更新了
   （沒看到變化就按 `Ctrl` + `F5`）

---

## 💻 換一台新電腦時

1. 裝 **Google Drive 電腦版**（drive.google.com/download）並登入
   → 你的 `G:\我的雲端硬碟\Web` 會自動同步過來，檔案就都在了
2. 要上線時，在資料夾開 **Claude Code** 說「幫我上線」
   → 如果這台還沒有「橋」，Claude 會自動幫你建好（從 GitHub 抓一份），你不用操作

> 只在一台電腦改，改完就上線。避免兩台同時改同一個檔案。

---

## 📁 資料夾地圖

| 檔案 / 資料夾 | 是什麼 |
|---|---|
| `index.html` | 首頁（上線版本 A） |
| `index-b.html` | 首頁的另一個設計版本（比較用，未上線） |
| 6 個分類頁（`defense.html`…） | 作品分類頁 |
| 22 個作品頁（`moai-router.html`…） | 各專案詳細頁 |
| `about.html` / `contact.html` | 關於 / 聯絡 |
| `assets/` | 共用樣式 `site.css` + 全部圖片 |
| `文案/` | **你編輯文字的地方**（每頁一個 txt）。改完叫 Claude「同步進網站」才生效 |
| `CLAUDE.md` | 給 Claude 讀的專案背景說明 |

---

## ❓ 常見狀況

- **「網站沒更新？」** → 等 1～2 分鐘 GitHub 建置，再按 `Ctrl`+`F5`。
- **「Drive 檔案旁邊有雲朵圖示、打不開？」** → 還在同步或還沒下載，等一下，或右鍵選「離線可用」。
- **「換電腦後 Claude 說沒有橋？」** → 直接說「幫我建好橋再上線」，Claude 會處理。
- **「可以只用 Google Drive、不要 GitHub 嗎？」** → 不行。Drive 不能當網站主機（Google 2016 年關掉了這功能），網站只從 GitHub 讀檔案。Drive 是你的工作室，GitHub 是櫥窗。

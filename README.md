# 履歷網站 (Resume Website)

這是一個使用 HTML、CSS 和 JavaScript 建立的簡單履歷網站。該網站允許使用者輸入個人資料、學歷、工作經歷、技能。網站具有互動性，使用者可以根據提供的欄位自訂內容。

## 功能

- **個人資料**：輸入欄位供使用者填寫姓名、電子郵件和電話。
- **學歷**：文字區域供使用者輸入學歷內容。
- **經歷**：文字區域供使用者輸入工作經歷。
- **技能**：文字區域供使用者列出技能。
- **互動按鈕**：提供「完成!」按鈕，點擊後會顯示簡單的提示訊息。

## 使用技術

- **HTML**：用於網站的結構和內容。
- **CSS**：用於網站的樣式和視覺效果。
- **JavaScript**：用於增強互動性，例如按鈕點擊功能。



## 架構與流程圖
![image](frontend/簡報1.jpg)
![image](frontend/簡報2.jpg)

## 流程
1. 頁面載入：
當使用者打開網頁時，會看到一個表單，表單分為五個部分：
基本資料：姓名、電子郵件、電話。
學歷：學校名稱、學習年限。
經歷：簡要描述過去的工作或實習經驗。
技能：列出所擁有的技能。
這些欄位都包含了輸入框或文字區域，使用者可以填寫對應資料。

2. 使用者填寫資料：
使用者在每個欄位中輸入資料。例如，在 "姓名" 欄位輸入自己的姓名，在 "電子郵件" 欄位填寫電子郵件地址。
每個欄位都是必填欄位，因此使用者在提交表單之前必須完成所有欄位的填寫。
3. 表單提交：
當使用者填寫完所有欄位並點擊「儲存並查看履歷」按鈕時，會觸發 submit 事件，執行以下操作：
event.preventDefault()：這行程式碼防止了表單的預設提交行為。表單資料不會直接送往伺服器。
程式會獲取使用者在各個欄位輸入的資料。
4. 顯示儲存後的資料：
當表單資料被成功獲取後，程式會使用 window.open() 開啟一個新的瀏覽器窗口。
新的窗口會顯示一份格式化過的履歷資料，其中包含使用者在表單中填寫的所有資訊：
基本資料：顯示姓名、電子郵件、電話。
學歷：顯示學校名稱和學習年限。
經歷：顯示經歷描述。
技能：顯示技能列表。
使用者可以在這個新窗口中查看所填寫的履歷資料。

5. 展示格式：
在新的瀏覽器窗口中，資料會以標題（h2）和段落（p）的方式顯示，使得資料一目了然。
各個區塊資料之間會有適當的間距，增加可讀性。
6. 程式碼處理和樣式：
頁面整體使用簡單而清晰的樣式設計，背景顏色為白色，表單內部白色區塊，讓頁面顯得簡潔且現代。
使用 CSS 控制表單欄位和按鈕的外觀，讓按鈕具有鼠標懸停效果。
表單欄位（如輸入框和文字區域）均具有明確的提示文字和邊框，保證使用者能夠清楚理解需要填寫的資料。

## 分工，貢獻度
楊竣安: 查資料 ，設計程式，製作ppt，報告，60%
陳奕嘉: 查資料 ，設計程式，製作ppt，40%
戴侑玲: 0%

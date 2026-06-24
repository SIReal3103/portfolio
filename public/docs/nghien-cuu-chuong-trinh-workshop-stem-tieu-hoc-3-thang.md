# Nghiên cứu & khung chương trình workshop STEM — Tiểu học (2 giờ/buổi, 1 sản phẩm/buổi)

**Mục đích tài liệu:** Lưu kết quả nghiên cứu để thiết kế workshop **miễn phí tại trường** tại Việt Nam: vừa **giải trí — hứng thú**, vừa **có sản phẩm mang về**, tập trung **robot — AI — web — game — công nghệ**, **không** đi sâu code hệ thống hay hệ điều hành.

**Liên hệ với `baocao.md`:** Triết lý *“mỗi buổi có sản phẩm chạy được”*, học qua dự án (PBL), nhấn mạnh **năng lực số + AI có trách nhiệm**, phù hợp định hướng **QĐ 3439**, **TT 02/2025**, **CV 3089/2020** (STEM).

**Phiên bản:** 1.0 — Tháng 5/2026

---

## 1. Bối cảnh & mục tiêu giáo dục

### 1.1. Đối tượng & ràng buộc thời gian

| Thông số | Gợi ý |
|-----------|--------|
| Độ tuổi | Tiểu học (ưu tiên **lớp 3–5** vì đã có môn Tin học & Công nghệ theo CT GDPT 2018; lớp 1–2 chỉ nên pilot ngắn, nhiều unplugged hơn) |
| Thời lượng | **120 phút/buổi** |
| Tần suất | **2 buổi/tuần** |
| Khung 3 tháng | **~12 tuần** → **24 buổi** (nếu tháng dài 4,3 tuần có thể cộng thêm 1–2 buổi ôn / showcase) |
| Sản phẩm | **Một “takeaway” rõ ràng** mỗi buổi: file, link, ảnh QR, video ngắn, poster, mã nguồn khối, robot chạy thử… |

### 1.2. Mục tiêu học tập (không trùng với “học code như lập trình viên”)

1. **Hiểu công nghệ như hệ thống:** input → xử lý → output; “máy tính/robot nhận lệnh và phản hồi”.
2. **Từ vựng thực tiễn:** *giao diện (frontend)*, *máy chủ/xử lý phía sau (backend)*, *dữ liệu*, *cảm biến*, *thuật toán đơn giản* — minh họa bằng sơ đồ 1 trang, không đi sâu OS/network stack.
3. **Dùng AI như công cụ:** mô tả bằng tiếng Việt, chỉnh sửa kết quả, **kiểm tra** thông tin (AI có thể sai).
4. **Tự tin & thể hiện:** trình bày 60–90 giây “em đã làm gì” trước khi tan lớp.

### 1.3. Vì sao “1 sản phẩm / 2 giờ” khả thi với tiểu học?

- **Sản phẩm nhỏ nhưng thật:** một đoạn video 30s, một trang web 1 màn hình, robot chạy 4 lệnh, một poster dữ liệu… đều là sản phẩm hợp lệ nếu định nghĩa rõ tiêu chí “xong”.
- **Chia slot thời gian cố định:** 0’–15’ kích thích + mục tiêu; 15’–75’ làm chính; 75’–105’ hoàn thiện + xuất bản; 105’–120’ **triển lãm 60 giây** + ảnh bìa nhóm.
- **Giảm “thiên đường cấu hình”:** chuẩn bị sẵn template (Scratch starter, Canva template, prompt mẫu cho Lovable).

---

## 2. Căn cứ tại Việt Nam (STEM, Tin — Công nghệ, AI)

> **Lưu ý pháp lý:** Số hiệu văn bản nên đối chiếu bản **PDF chính thức** trên cổng Bộ GD&ĐT / thư viện pháp luật khi trình nhà trường. Dưới đây là **khung áp dụng** phổ biến trong tài liệu hướng dẫn STEM tiểu học và báo cáo chiến lược nội bộ của bạn.

| Nguồn / định hướng | Ý nghĩa với workshop 2h |
|--------------------|-------------------------|
| **Giáo dục STEM tiểu học** (các công văn hướng dẫn tổ chức hoạt động STEM cấp tiểu học giai đoạn 2022–2024, mở rộng triển khai) | Hoạt động **liên môn**, **gắn vấn đề thật** (môi trường, địa phương, an toàn), có **sản phẩm** và **phản ánh** |
| **CT GDPT 2018** — môn **Tin học và Công nghệ** (lớp 3–5) | An toàn & đạo đức tin học; làm quen thuật toán — lập trình trực quan; mô phỏng — kết nối đời sống |
| **Công văn / hướng dẫn STEM** (tinh thần **CV 3089/2020** trong `baocao.md`) | PBL, đánh giá theo quá trình + sản phẩm, khuyến khích CLB |
| **QĐ 3439** — khung AI phổ thông (4 miền NLa–NLd; tiểu học tích hợp, tối thiểu giờ theo khung) | Mỗi buổi chèn nhẹ **NLa** (con người trung tâm), **NLb** (dữ liệu cá nhân, ảnh quê, không lộ thông tin nhạy cảm), **NLc** (dùng công cụ AI có kiểm soát) |
| **TT 02/2025** — năng lực số | *Tạo nội dung số*, *giao tiếp — cộng tác số*, *an toàn — bảo mật số* |

**Cách “ăn khớp” khi báo cáo với trường / phòng:** mỗi buổi gắn **1 dòng** trong bảng mapping: STEM môn nào (Khoa học / Tin / Mĩ thuật…) + **sản phẩm** + **năng lực** (không cần quá dài).

---

## 3. Nguyên tắc thiết kế sư phạm (để workshop “vui mà vẫn học”)

### 3.1. Ba lớp nội dung song song (trích tinh thần U–T–H–S trong `baocao.md`, rút gọn cho 2 giờ)

| Lớp | Ví dụ trong buổi |
|-----|------------------|
| **Cụ thể — vui** | Robot chạy, trò chơi “ra lệnh như máy” |
| **Ý niệm — nhẹ** | Sơ đồ 3 hộp: nhập — xử lý — xuất; “màn hình em thấy” vs “chuyện xảy ra phía sau” |
| **Sản phẩm — chia sẻ** | Link web, video, file Scratch, ảnh poster có QR |

### 3.2. Quy tắc “không dạy sâu nhưng vẫn đúng”

- **Dạy:** mệnh lệnh, thứ tự, lặp, điều kiện (dưới dạng “nếu… thì…”), dữ liệu là “thông tin robot/AI dùng”.
- **Không dạy:** OS kernel, TCP/IP, cú pháp C/Java, tối ưu hệ thống.

### 3.3. An toàn & đạo đức (bắt buộc nhắc ngắn mỗi buổi 3–5’)

- Không nhập **địa chỉ nhà chi tiết, số điện thoại, CMND** vào công cụ AI công cộng.
- Ảnh người: **xin phép** hoặc dùng ảnh minh họa/AI không nhận diện cá nhân.
- **Kiểm chứng:** “AI nói đúng chưa?” — 1 ví dụ sai có chủ đích.

### 3.4. Vận hành lớp đông (workshop trường)

- **Tỷ lệ hỗ trợ:** 1 giảng viên + 1–2 trợ giảng / 25–30 HS.
- **Nhóm 2–3:** luân phiên vai *thuyết minh — thao tác — ghi chép*.
- **Offline-first:** USB chứa installer / Scratch offline nếu mạng yếu; có **plan B** khi Lovable chậm (mục 5.2).

---

## 4. Buổi mẫu (Buổi 1) — đúng ý tưởng của bạn

**Sản phẩm buổi 1 (2 trong 1 có thể gộp thành “bộ portfolio buổi 1”):**

1. **Video ngắn / ảnh chụp màn hình** robot hoàn thành nhiệm vụ (đi 4 hướng).
2. **Link trang “Quê em”** (hoặc file HTML zip nếu trường không cho publish).

| Khung giờ | Hoạt động 1 — Robot & “hệ thống” | Hoạt động 2 — AI + Web |
|-----------|----------------------------------|-------------------------|
| 0’–10’ | “Robot là máy có cảm biến + chương trình” — demo wow | Giới thiệu: hôm nay em sẽ **làm ra** gì |
| 10’–25’ | Sơ đồ 1 trang: **điều khiển (em)** → **chương trình** → **động cơ/cảm biến** | Song song: sơ đồ **em gõ chữ** → **AI gợi ý** → **trang web** |
| 25’–70’ | Lập trình khối: tiến — lùi — trái — phải (hoặc “tới — lui — rẽ”) | HS viết **3–5 câu** về quê + **prompt mẫu** GV soạn sẵn → Lovable sinh trang |
| 70’–100’ | Thi “đường đua” mini / nhiệm vụ sân trường có thước đo | Chỉnh **tiêu đề, ảnh, màu**, thêm **1 đoạn** tự viết không dùng AI |
| 100’–120’ | **Triển lãm 60s** + chụp ảnh nhóm + checklist dọn robot | Xuất link / QR in sẵn khổ nhỏ |

**Công cụ gợi ý robot:** OhStem / MakeCode + Micro:bit + xe rover (đúng hướng phần cứng trong `baocao.md`); hoặc LEGO Education nếu trường có.

---

## 5. Lựa chọn công cụ (Lovable & thay thế)

### 5.1. Khi dùng Lovable / Bolt / tương tự

- Chuẩn bị **tài khoản lớp** hoặc **magic link** theo chính sách nhà cung cấp; phân **workspace** theo nhóm.
- HS **lớp nhỏ:** GV nhập hộ phần email nếu cần, tránh rào cản đăng ký.

### 5.2. Plan B (mạng chậm / chặn nền tảng)

| Thay thế | Sản phẩm |
|----------|----------|
| **Google Sites** + AI soạn nội dung bên Chatbot (GV giám sát) | Site 1 trang |
| **Canva** “trang web một trang” / bản trình bày xuất PDF có QR | “Web-poster” |
| **Scratch** project giới thiệu quê (ảnh + âm thanh ghi sẵn) | File `.sb3` |

---

## 6. Lộ trình 3 tháng — **24 buổi** (gợi ý chi tiết)

**Cấu trúc 4 “module” × 6 buổi** — luân phiên **Robot / AI-Truyền thông / Web-App nhìn thấy / Game**, cuối mỗi module có **showcase 30’** (có thể gộp vào buổi số 6).

### Module A — “Em hiểu máy tính & robot” (Buổi 1–6)

| Buổi | Chủ đề | Hoạt động chính | Sản phẩm takeaway |
|------|--------|-----------------|-------------------|
| **1** | Robot điều khiển + Web quê hương | Như mục 4 | Video robot + link web / poster QR |
| **2** | Thuật toán là “công thức làm việc” | Unplugged: xếp hàng — tìm kiếm — đếm; sau đó lặp lại trên Scratch **không cần game hoàn chỉnh** | Animation 10–20s “công thức của em” |
| **3** | Cảm biến là “mắt tai” | Micro:bit: nút bấm, lắc, âm thanh | “Máy báo hiệu” có 2 trạng thái + mô tả 1 ảnh |
| **4** | **Dữ liệu** quanh em | Bảng khảo sát lớp (giấy → nhập nhóm) → biểu đồ **Canva/Google Sheets** | Poster **“Dữ liệu lớp em”** |
| **5** | Robot theo vạch đơn giản | Line-follow đơn giản hoặc “bám mép bàn” (tùy kit) | Video + sơ đồ “input là gì” |
| **6** | Mini triển lãm Module A | HS thuyết trình 60s | **Portfolio 4 món** A1–A4 in 1 tờ |

### Module B — “AI tạo nội dung có trách nhiệm” (Buổi 7–12)

| Buổi | Chủ đề | Hoạt động chính | Sản phẩm takeaway |
|------|--------|-----------------|-------------------|
| **7** | AI là gì (trực quan) | So sánh “máy tìm chữ” vs “máy đoán”; demo **Teachable Machine** cực ngắn | Ảnh chụp màn hình + 3 câu “em hiểu AI là…” |
| **8** | **Nhận diện hình** (đồ vật lớp học) | Chụp 20 ảnh / lớp → train nhẹ → nhúng Scratch hoặc demo live | Game/mini-demo 1 màn |
| **9** | **Poster khoa học** bằng AI | AI phác thảo → HS sửa tay + trích “nguồn thật” (sách, website GV duyệt) | Poster A4/A3 |
| **10** | **Podcast 60–90s** | Viết 5–7 câu → AI đọc (ElevenLabs / đọc máy) + nhạc nền miễn phí | File mp3 + bìa |
| **11** | **Quảng bá lễ hội trường** | AI sinh khẩu hiệu + thiết kế Canva | Bộ 3 poster + 1 caption |
| **12** | Showcase Module B | “Chợ ảnh” lớp học | Album link Drive / Padlet |

### Module C — “Web & ứng dụng nhìn thấy” (Buổi 13–18)

| Buổi | Chủ đề | Hoạt động chính | Sản phẩm takeaway |
|------|--------|-----------------|-------------------|
| **13** | **Frontend / Backend** (lại dạy nhanh) | Cùng một ví dụ: form “tên em” → **giả lập** “lưu ở đâu” (Google Form / Notion) | Sơ đồ 2 phía + ảnh màn hình |
| **14** | Trang “CLB em thích” | Lovable/Bolt/Plan B | Landing page 1 màn |
| **15** | Trang “Bảo vệ môi trường” | Nhóm chọn 1 vấn đề địa phương | Web 1 màn + 1 infographic |
| **16** | “Ứng dụng nhỏ trong trình duyệt” | AI sinh **quiz** 5 câu Tiếng Việt / Khoa học → nhúng vào trang | Trang quiz live |
| **17** | **Bản đồ / timeline** sự kiện | Canva hoặc AI + chỉnh tay | 1 áp phích timeline |
| **18** | Hackathon nhỏ 90’ | Đề bài hẹp: “Giúp bạn mới vào trường” | Web / bộ slide |

### Module D — “Game & robot tổng hợp” (Buổi 19–24)

| Buổi | Chủ đề | Hoạt động chính | Sản phẩm takeaway |
|------|--------|-----------------|-------------------|
| **19** | Game bắt phím / mũi tên | Scratch: nhân vật + điểm | Game 1 level |
| **20** | Game có **điều kiện** | “Nếu chạm … thì …” | Bản nâng cấp + ảnh màn hình |
| **21** | Kết hợp **AI nhận diện** (tuần 8) với game | Mức tối thiểu: 1 tương tác | Demo live |
| **22** | Robot “phục vụ” (giao hàng giả lập) | Điểm A → B trong sân lớp | Video + sơ đồ luồng |
| **23** | Tổng ôn + chọn dự án tự do nhỏ | HS chọn 1 trong 3 track: web / game / robot | Checklist hoàn thành |
| **24** | **Hội chợ cuối khóa** | Trình bày + phụ huynh / thầy cô khối | Bằng khen / sticker + portfolio **24 ô** |

---

## 7. Đánh giá (nhẹ, thân thiện trường công)

**Rubric 1 trang / buổi (4 điểm, mỗi điểm ☆☆☆):**

1. **Hoàn thành** đúng yêu cầu tối thiểu.  
2. **Sáng tạo** (màu, câu chữ, ý tưởng).  
3. **Giải thích được** 1 câu: “Input là gì / output là gì”.  
4. **Hợp tác** (chia vai rõ).

Không dùng điểm số áp lực; có thể **nhãn**: Vàng / Bạc / Kim cương “debug”.

---

## 8. Rủi ro thường gặp & giảm thiểu

| Rủi ro | Giảm thiểu |
|--------|-------------|
| Hết giờ chưa xong | “MVP buổi học” rõ từ đầu; checklist trên bảng |
| Mạng / tài khoản | Plan B mục 5.2; tài khoản dự phòng |
| HS trình độ lệch | Nhiệm vụ phân tầng A/B/C cùng một chủ đề |
| Ngôn ngữ tiếng Anh trên tool | GV có **video mute** + thẻ từ vựng 10 từ / buổi |

---

## 9. Tài liệu tham khảo (để tra cứu sâu hơn)

1. Nội bộ: `baocao.md` — khung AI Thực Chiến, U–T–H–S, mapping QĐ 3439, công cụ Scratch / MakeCode / Teachable Machine / Lovable.  
2. STEM Việt Nam — cổng hướng dẫn & học liệu: [stemvietnam.vn](https://www.stemvietnam.vn/)  
3. Tài liệu tập huấn STEM tiểu học theo CT GDPT 2018 (ví dụ bản lưu tại thư viện số SPKT): [thuvienso.hcmute.edu.vn — tài liệu tập huấn STEM tiểu học](https://thuvienso.hcmute.edu.vn/tailieuvn/doc/tai-lieu-tap-huan-trien-khai-thuc-hien-giao-duc-stem-cap-tieu-hoc-theo-chuong-trinh-gdpt-2018-2926016.html)  
4. AI4K12 — “5 Big Ideas” (dịch sang hoạt động 5–10 phút/buổi): [AI4K12](https://ai4k12.org/)  
5. UNESCO — AI competency framework for students (định hướng đạo đức & hiểu biết): tìm kiếm *UNESCO AI competency framework students*.

---

## 10. Việc cần làm tiếp theo (khuyến nghị)

1. **Chốt độ tuổi** trong trường (khuyến nghị lớp 4–5 cho track web/AI nặng hơn).  
2. **Pilot 1 tuần** (2 buổi) tại 1 trường — đo thời gian thực tế từng hoạt động.  
3. **Bộ tài liệu phụ huynh** 1 trang: mục tiêu, ảnh chụp lớp, cam kết bảo vệ dữ liệu.  
4. **Điều chỉnh 24 buổi** theo thiết bị trường có/không có robot.

---

*Tài liệu này là khung nghiên cứu — có thể cắt xén thành đề cương trình kèm theo giáo án từng buổi khi triển khai thực địa.*

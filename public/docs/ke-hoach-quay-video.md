# KẾ HOẠCH QUAY VIDEO – ĐÀO TẠO AI CƠ BẢN VINMEC 2026

---

## REVISE – ĐÁNH GIÁ & LÝ DO CẬP NHẬT

### Nguồn cập nhật chính

Tài liệu này đã được cập nhật lại toàn bộ phần kế hoạch script theo file `Vinmec_GiaoAn_Video_v2.docx`.

Không sử dụng nội dung từ bản giáo án cũ. Các phần script, phân bổ thời gian, slide, quiz, thực hành và thông điệp chính bên dưới bám theo giáo án video v2.0.

### Đánh giá bản cũ

Bản kế hoạch cũ đã có nền tảng tốt về yêu cầu kỹ thuật, bố cục quay, checklist trước quay và checklist upload LMS. Tuy nhiên phần nội dung bài giảng vẫn dựa trên cấu trúc cũ: ít nội dung về cách LLM hoạt động, chưa nhấn mạnh workflow automation, chưa có FATE Framework, và phần Bài 2 thiên về bảo mật dữ liệu hơn là kết hợp đầy đủ giữa hallucination, bias, trách nhiệm, minh bạch và đạo đức AI.

### Vì sao cần sửa

1. Giáo án mới cập nhật đúng hướng học AI hiện đại: người học không chỉ biết “dùng ChatGPT”, mà hiểu AI hiện nay khác giai đoạn ChatGPT mới ra mắt cuối năm 2022 như thế nào.
2. Đối tượng là bác sĩ, điều dưỡng, dược sĩ, kỹ thuật viên và nhân sự y tế, nên nội dung phải nhấn mạnh tính hữu ích trong công việc y tế hằng ngày nhưng luôn giữ nguyên tắc kiểm chứng và trách nhiệm chuyên môn.
3. Giáo án v2 bổ sung các phần quan trọng: LLM hoạt động bằng xác suất từ, gốc rễ hallucination, workflow automation, cơ hội AI cho từng nhóm nhân sự Vinmec, FATE Framework và quy trình CRAFT + An toàn.
4. Câu hook được viết lại theo tinh thần video tham khảo của DeepLearning.AI: AI ngày nay đã khác xa thời điểm ChatGPT ra mắt; dù học viên đang ở mức nào, khóa học giúp họ trở thành người dùng AI thành thạo hơn trong ba nhóm việc phổ biến: tìm thông tin, brainstorm và viết nội dung, với ngữ cảnh phù hợp cho môi trường y tế.
5. Script mới giảm cảm giác quảng bá, tăng tính thực tế: AI giúp tiết kiệm thời gian, nhưng không thay thế phán đoán lâm sàng, đạo đức nghề nghiệp và trách nhiệm pháp lý của nhân viên y tế.

### Câu hook đã cập nhật

> “Làm việc với AI ngày nay rất khác so với thời điểm ChatGPT ra mắt lần đầu vào cuối năm 2022. AI không còn chỉ là một công cụ để hỏi thử cho vui; nếu dùng đúng, AI có thể hỗ trợ bác sĩ, điều dưỡng, dược sĩ, kỹ thuật viên và nhân viên văn phòng trong những việc rất thực tế hằng ngày: tìm thông tin nhanh hơn, brainstorm hướng xử lý, soạn thảo email, tóm tắt tài liệu, dịch y văn, chuẩn bị báo cáo và giải thích nội dung chuyên môn theo cách dễ hiểu hơn. Dù hiện tại bạn mới bắt đầu hay đã từng dùng AI, khóa học này được thiết kế để giúp bạn trở thành một người dùng AI thành thạo hơn: biết hỏi đúng, biết kiểm chứng, biết dùng AI đúng chỗ và an toàn trong môi trường y tế.”

---

## YÊU CẦU KỸ THUẬT (BẮT BUỘC)

### Video
| Thông số | Yêu cầu |
|----------|---------|
| Độ phân giải | 1920×1080 (Full HD) tối thiểu |
| Frame rate | 30fps (toàn bộ video, kể cả đoạn demo screen) |
| Codec xuất | H.264 / H.265 |
| Định dạng file | MP4 |
| Bitrate | 8–15 Mbps |
| Tỉ lệ khung hình | 16:9 |
| Color profile | Rec.709 |

### Âm thanh
| Thông số | Yêu cầu |
|----------|---------|
| Sample rate | 48kHz |
| Bit depth | 24-bit |
| Kênh | Stereo hoặc Mono |
| Mức âm lượng đích | -14 LUFS |
| Noise floor | < -60 dB |
| Microphone | Lavalier (cài áo) hoặc shotgun mic – KHÔNG dùng mic tích hợp laptop |

### Ánh sáng
- 3-point lighting: Key light (trước-trái), Fill light (trước-phải), Back light (tách nền)
- Nhiệt độ màu: 5600K hoặc 3200K – đồng nhất toàn bộ video
- Không có bóng đổ lên mặt giảng viên
- Dùng đèn LED bi-color, tránh đèn huỳnh quang cũ

### Background & Set
- Ưu tiên 1: Background trắng/xám trung tính + logo Vinmec góc trên phải
- Ưu tiên 2: Phòng thực tế sạch, gọn
- Giảng viên mặc trang phục chuyên nghiệp – tránh kẻ sọc nhỏ, màu đỏ thuần
- Camera ngang tầm mắt ± 5°

### Screen Recording (demo ChatGPT)
- Phần mềm: OBS Studio hoặc Camtasia
- Độ phân giải capture: 1920×1080, 30fps
- Con trỏ chuột: bật highlight màu vàng, kích thước lớn
- Ẩn bookmark bar, tab không liên quan trước khi quay
- Không dùng dữ liệu bệnh nhân thật, không hiển thị email/tài khoản/cửa sổ nội bộ Vinmec

### Layout màn hình
- Talking head: GV xuất hiện góc phải màn hình, slide chiếm 70% bên trái
- Phần mở đầu: GV nhìn thẳng camera, nói trực tiếp không có slide trong 30 giây đầu
- Demo AI: chia đôi màn hình – GV bên trái, ChatGPT bên phải
- Quiz/Practice: dừng hình theo đúng thời lượng, có text overlay rõ ràng
- Phần chốt: zoom vào slide 5 điểm chính hoặc 5 cam kết

### Post-production
- Phần mềm edit: DaVinci Resolve / Premiere Pro / Final Cut Pro
- Color grade: match màu giữa các clip, Rec.709
- Subtitles: Tiếng Việt, font Inter hoặc Arial Bold, cỡ 40–44px, shadow đen nhẹ
- Intro/Outro: Template Vinmec branding, tối đa 10 giây
- Lower third: tên + chức danh giảng viên, xuất hiện 3 giây đầu mỗi bài
- Quiz slides: dừng hình 5 giây + text overlay “Dừng video – Suy nghĩ trước khi xem đáp án”
- Practice slides: dừng hình 15–30 giây + text overlay “Thử làm bài tập trước khi tiếp tục”
- Nhịp nói mục tiêu: 130–150 từ/phút
- Nên có recap ngắn 30 giây sau mỗi khoảng 10 phút nội dung

---

## TỔNG QUAN SẢN PHẨM

| Hạng mục | Chi tiết |
|----------|---------|
| Số video | 2 video riêng biệt |
| Thời lượng mỗi video | 45 phút |
| Tổng thời lượng | 90 phút |
| Tổng slides | 37 slides theo giáo án v2.0 (Bài 1: 21 slides, Bài 2: 16 slides) |
| Đối tượng | Toàn bộ CBNV y tế Vinmec: bác sĩ, điều dưỡng, dược sĩ, kỹ thuật viên, quản lý, hành chính |
| Kênh phân phối | LMS nội bộ Vinmec |
| Số lần quay mỗi bài | 2–3 lần, chọn take tốt nhất |
| Trọng tâm cập nhật | LLM, Workflow Automation, Hallucination, Luật 91/2025, FATE Framework, CRAFT + An toàn |

---

## CHECKLIST TRƯỚC KHI QUAY (làm trước ít nhất 3 ngày)

- [ ] Luyện tập đọc script ít nhất 2 lần – mục tiêu nói tự nhiên, không đọc nguyên văn
- [ ] Bấm giờ thử: Bài 1 đúng 45 phút, Bài 2 đúng 45 phút
- [ ] Slide đã finalize: font, màu, hình ảnh đúng brand Vinmec
- [ ] Mở sẵn tab ChatGPT đã đăng nhập để demo live
- [ ] Chuẩn bị ví dụ prompt demo – KHÔNG dùng thông tin bệnh nhân thật
- [ ] Tắt thông báo hệ thống (macOS: Do Not Disturb / Windows: Focus Assist)
- [ ] Test camera: focus, exposure, white balance
- [ ] Test micro: record 30 giây, nghe lại kiểm tra noise, volume
- [ ] Test screen record: 1 phút capture xem lại
- [ ] Kiểm tra ổ cứng: cần ≥ 100GB trống
- [ ] Kiểm tra toàn bộ quiz/practice overlay đã đúng thời lượng dừng hình

---

## CHECKLIST TRƯỚC KHI UPLOAD LÊN LMS

- [ ] Video chạy được, âm thanh rõ, hình ảnh sắc nét
- [ ] Thời lượng đúng: 45 phút/bài
- [ ] Slide demo AI không hiển thị thông tin cá nhân thật
- [ ] Script đúng theo giáo án `Vinmec_GiaoAn_Video_v2.docx`
- [ ] Quiz/Practice trong video có overlay rõ ràng
- [ ] Quiz LMS đã cài đáp án đúng và ngưỡng đạt
- [ ] Ngưỡng đạt: 7/10 câu đúng đã được cấu hình nếu dùng quiz sau bài
- [ ] Link buổi thực hành đã được gắn vào LMS sau khi học viên hoàn thành phần lý thuyết

---

# BÀI 1: NỀN TẢNG SỬ DỤNG AI TRONG CÔNG VIỆC | 45 PHÚT

## Bảng phân bổ thời gian – Bài 1

| Phút | Slide / Hoạt động | Nội dung |
|------|-------------------|----------|
| 00:00–01:30 | S1 – Cover + Mở đầu | Hook mới, giới thiệu mục tiêu bài học |
| 01:30–03:00 | S2 – Mục tiêu bài học | 5 điều học viên sẽ làm được sau Bài 1 |
| 03:00–07:00 | S3 – AI là gì? | Định nghĩa, 3 loại AI, tại sao quan trọng với y tế |
| 07:00–11:00 | S4 – LLM hoạt động như thế nào? | Training vs Inference, gốc rễ hallucination |
| 11:00–14:00 | S5 – AI trong y tế | 3 cột: đã triển khai, dùng ngay, tương lai |
| 14:00–19:00 | S6 – 4 công cụ AI phổ biến | ChatGPT, Copilot, Claude, Gemini + hướng dẫn truy cập |
| 19:00–20:00 | Quiz A | Kiểm tra nhanh về AI tools |
| 20:00–23:30 | S7 – Workflow Automation | 3 cấp độ: Thủ công → AI-Hỗ trợ → AI-Tự động |
| 23:30–27:00 | S8 – Cơ hội Automation tại Vinmec | 4 vai trò + ví dụ cụ thể + nguyên tắc vàng |
| 27:00–30:00 | S9 – Prompt là gì? | Định nghĩa prompt tốt/xấu |
| 30:00–35:00 | S10 – Mô hình CRAFT | 5 yếu tố CRAFT + ví dụ thực tế |
| 35:00–38:00 | S11 – CRAFT ví dụ thực tế | Demo prompt chi tiết, so sánh trước/sau |
| 38:00–39:00 | Quiz B + Thực hành B | Quiz CRAFT + viết prompt 30 giây |
| 39:00–41:30 | S12–S13 – Ví dụ ứng dụng 1–4 | Email, báo cáo, tra cứu thuốc, khảo sát |
| 41:30–42:00 | Thực hành C | Chọn tình huống và viết prompt |
| 42:00–43:30 | S14–S15 – Kỹ thuật nâng cao + AI giỏi/yếu | Few-shot, Chain-of-Thought, điểm mạnh/yếu |
| 43:30–44:00 | Quiz D | AI đúng chỗ hay sai chỗ? |
| 44:00–45:00 | S16 – Tổng kết Bài 1 | 5 thông điệp chốt + hướng dẫn Bài 2 |

---

## SLIDE 1: MỞ ĐẦU & HOOK | 00:00 – 01:30

**Nội dung slide:**
- Cover slide: Logo Vinmec + tiêu đề “Nền tảng Sử dụng AI trong Công việc”
- Tagline: “45 phút thay đổi cách bạn làm việc”
- Phụ đề: Bài 1/2 | Chương trình Đào tạo AI Cơ bản Vinmec
- Hình ảnh gợi ý: nhân viên y tế đang dùng máy tính/tablet với giao diện AI

**Script giảng viên:**

> “Xin chào! Tôi là [Tên GV]. Trong 45 phút tới, chúng ta sẽ cùng học cách dùng AI như một trợ lý công việc thực tế trong môi trường y tế.”
>
> “Làm việc với AI ngày nay rất khác so với thời điểm ChatGPT ra mắt lần đầu vào cuối năm 2022. Khi đó, nhiều người chỉ thử hỏi vài câu cho vui. Còn hiện nay, AI đã trở thành công cụ hỗ trợ rất nhiều việc hằng ngày: tìm thông tin, brainstorm ý tưởng, soạn thảo email, tóm tắt tài liệu, dịch y văn, chuẩn bị báo cáo và giải thích nội dung chuyên môn theo cách dễ hiểu hơn.”
>
> “Nếu dùng đúng, AI có thể giúp bác sĩ, điều dưỡng, dược sĩ, kỹ thuật viên và nhân viên văn phòng tiết kiệm hàng giờ làm việc mỗi tuần. Nhưng dùng đúng nghĩa là phải biết hỏi đúng, kiểm chứng đúng và giữ an toàn dữ liệu bệnh nhân.”
>
> “Dù hiện tại bạn mới bắt đầu hay đã từng dùng AI, khóa học này được thiết kế để giúp bạn trở thành một người dùng AI thành thạo hơn: biết dùng AI cho những việc phổ biến nhất trong công việc – tìm thông tin, brainstorm và viết nội dung – theo cách phù hợp với môi trường y tế Vinmec.”

**Chỉ dẫn video / màn hình:**
- GV nhìn thẳng vào camera, không đọc script cứng
- Có thể dùng B-roll nhân viên Vinmec làm việc, không dùng hình bệnh nhân nhận diện được
- Sau câu “45 phút” có thể zoom nhẹ vào graphic countdown

**Lưu ý giảng viên:**
- Đây là 90 giây quan trọng nhất, cần nói tự nhiên và có năng lượng
- Câu hook nên gần gũi với bác sĩ/nhân viên y tế, tránh tạo cảm giác AI thay thế chuyên môn
- Nếu take đầu chưa tự nhiên, quay lại ít nhất 3 lần

---

## SLIDE 2: MỤC TIÊU BÀI HỌC | 01:30 – 03:00

**Nội dung slide:**

Sau bài học này, bạn sẽ làm được:
- Giải thích AI là gì và tại sao quan trọng với y tế
- Phân biệt 4 công cụ AI và biết dùng ChatGPT Free
- Viết prompt hiệu quả theo mô hình CRAFT
- Áp dụng AI vào ít nhất 3 tình huống công việc thực tế
- Hiểu AI hỗ trợ workflow automation như thế nào

**Script giảng viên:**

> “Sau bài học này, bạn sẽ có 5 kỹ năng cụ thể.”
>
> “Một: hiểu AI là gì và vì sao nó liên quan trực tiếp đến công việc y tế. Hai: biết 4 công cụ AI phổ biến và cách bắt đầu với ChatGPT. Ba: viết prompt hiệu quả theo mô hình CRAFT. Bốn: áp dụng AI vào các tình huống công việc thực tế. Và năm: hiểu AI có thể hỗ trợ tự động hóa quy trình làm việc như thế nào.”
>
> “Tôi muốn nhấn mạnh mục tiêu số 3 và số 5. Phiên bản cập nhật này không chỉ nói về cách viết prompt, mà còn giúp bạn biết đưa AI vào quy trình làm việc hằng ngày một cách có kiểm soát.”

**Chỉ dẫn video / màn hình:**
- Hiển thị từng mục tiêu bằng animation build
- GV chỉ vào từng dòng khi đọc

---

## SLIDE 3: AI LÀ GÌ? – ĐỊNH NGHĨA & PHÂN LOẠI | 03:00 – 07:00

**Nội dung slide:**
- AI = Trí tuệ nhân tạo: khả năng máy tính thực hiện việc đòi hỏi trí tuệ con người
- 3 loại AI:
  - AI Phân tích: phân tích dữ liệu, dự đoán
  - AI Tổng quát (Generative AI): tạo nội dung mới như văn bản, hình ảnh, code
  - AI Hội thoại: ChatGPT, Claude, Gemini – trọng tâm khóa học này
- AI là công cụ hỗ trợ, không phải người ra quyết định

**Script giảng viên:**

> “AI – trí tuệ nhân tạo – hiểu đơn giản là khả năng của máy tính thực hiện những việc trước đây chỉ con người mới làm được: đọc hiểu ngôn ngữ, phân tích văn bản, nhận diện hình ảnh, tạo ra nội dung mới.”
>
> “Có 3 loại AI chính. Loại thứ nhất là AI phân tích, ví dụ phần mềm hỗ trợ đọc X-quang hoặc dự đoán nguy cơ biến chứng. Loại thứ hai là AI tổng quát, hay GenAI, có thể tạo văn bản, hình ảnh, code lập trình. Loại thứ ba, và là trọng tâm của khóa học, là AI hội thoại – như ChatGPT, Claude, Gemini – những công cụ bạn có thể gõ câu hỏi và nhận câu trả lời tức thì.”
>
> “Điều quan trọng cần nhớ ngay từ đầu: AI là công cụ hỗ trợ. Giống như máy siêu âm giúp bác sĩ nhìn rõ hơn, AI giúp xử lý thông tin nhanh hơn, nhưng quyết định cuối cùng vẫn thuộc về con người.”

**Lưu ý quay:**
- Không đi sâu vào neural network hoặc machine learning
- Câu “AI là công cụ hỗ trợ” cần được nhấn mạnh vì sẽ lặp lại trong cả 2 bài

---

## SLIDE 4: AI NGÔN NGỮ LỚN (LLM) HOẠT ĐỘNG NHƯ THẾ NÀO? | 07:00 – 11:00

**Nội dung slide:**

**Giai đoạn huấn luyện (Training):**
- Thu thập hàng tỷ văn bản
- Học mẫu ngôn ngữ
- Nén thành hàng tỷ tham số (weights)

**Giai đoạn sử dụng (Inference):**
- Bạn gõ prompt
- AI tính xác suất từ tiếp theo
- AI tạo câu trả lời từng từ

**Insight quan trọng:** AI dự đoán xác suất từ, không tra cứu sự thật tuyệt đối → có thể tạo thông tin sai → gốc rễ của hallucination.

**Script giảng viên:**

> “Slide này giải thích cách ChatGPT thực sự hoạt động. Không cần hiểu kỹ thuật sâu, chỉ cần hiểu 2 giai đoạn chính.”
>
> “Giai đoạn đầu là huấn luyện, xảy ra trước khi bạn dùng. AI học từ hàng tỷ văn bản: sách, bài báo, website, code lập trình. Từ đó, hệ thống học các mẫu ngôn ngữ và nén kiến thức thành hàng tỷ tham số.”
>
> “Giai đoạn thứ hai là sử dụng, xảy ra mỗi khi bạn gõ prompt. Bạn nhập câu hỏi, AI tính toán từ tiếp theo nào có xác suất phù hợp nhất trong ngữ cảnh đó, rồi tạo câu trả lời từng từ một.”
>
> “Điểm quan trọng nhất là: AI dự đoán từ theo xác suất, không phải lúc nào cũng tra cứu sự thật. Vì vậy AI có thể tạo thông tin sai mà vẫn nói rất tự tin. Hiện tượng này gọi là hallucination. Đây là lý do trong công việc y tế, mọi thông tin từ AI đều cần được kiểm chứng.”
>
> “Bạn có thể hình dung autocomplete trên điện thoại: máy gợi ý từ tiếp theo dựa trên xác suất. ChatGPT làm điều tương tự, nhưng ở quy mô lớn hơn rất nhiều. Đó là sức mạnh, nhưng cũng là giới hạn.”

**Chỉ dẫn video / màn hình:**
- Dùng layout 2 cột: Training và Inference
- Highlight ô “AI dự đoán xác suất, không tra cứu sự thật”
- Có thể dùng B-roll autocomplete điện thoại

**Lưu ý giảng viên:**
- Đây là slide kỹ thuật nhất Bài 1, nói chậm hơn bình thường
- Nhấn mạnh nhiều lần: AI dự đoán xác suất, không phải nguồn sự thật tuyệt đối

---

## SLIDE 5: AI TRONG Y TẾ – BỨC TRANH TOÀN CẢNH | 11:00 – 14:00

**Nội dung slide:**

| Nhóm | Ví dụ |
|------|-------|
| AI đã triển khai toàn cầu | Đọc ảnh X-quang, dự đoán biến chứng, drug discovery, giọng nói lâm sàng |
| Bạn có thể dùng ngay | ChatGPT/Copilot/Claude/Gemini: soạn thảo, dịch, brainstorm, báo cáo |
| AI sẽ đến trong 2–3 năm | Ambient AI ghi bệnh án, chatbot bệnh nhân 24/7, cảnh báo tương tác thuốc thời gian thực |

Chú thích: Khóa học này tập trung vào nhóm “Bạn có thể dùng ngay”.

**Script giảng viên:**

> “Slide này cho bạn thấy bức tranh tổng thể của AI trong y tế, để biết chúng ta đang đứng ở đâu.”
>
> “Cột bên trái là những hệ thống AI đã triển khai ở các bệnh viện lớn trên thế giới: hỗ trợ đọc X-quang, dự đoán nguy cơ biến chứng, hỗ trợ nghiên cứu thuốc, hoặc ghi chú lâm sàng bằng giọng nói. Những hệ thống này thường cần nhiều năm phát triển, dữ liệu lớn và quy trình kiểm định nghiêm ngặt.”
>
> “Cột giữa là những gì bạn có thể dùng ngay hôm nay: ChatGPT, Copilot, Claude, Gemini. Đây là các công cụ giúp soạn thảo, dịch thuật, brainstorm, tóm tắt tài liệu, tạo báo cáo. Đây là trọng tâm của khóa học.”
>
> “Cột phải là tương lai gần: AI tự ghi bệnh án từ cuộc trò chuyện, chatbot hỗ trợ bệnh nhân 24/7, cảnh báo tương tác thuốc theo thời gian thực.”
>
> “Hãy nhớ: khóa học này tập trung vào những gì bạn có thể làm ngay, an toàn và có trách nhiệm.”

**Chỉ dẫn video / màn hình:**
- Chỉ lần lượt từng cột
- Zoom nhẹ vào cột “Bạn có thể dùng ngay”

---

## SLIDE 6: 4 CÔNG CỤ AI PHỔ BIẾN | 14:00 – 19:00

**Nội dung slide:**
- ChatGPT (OpenAI): phổ biến nhất, có bản Free tại `chat.openai.com`
- Microsoft Copilot: tích hợp Office 365 (Word, Excel, Teams, Outlook)
- Claude (Anthropic): mạnh về phân tích văn bản dài, thường phù hợp khi đọc báo cáo dài
- Gemini (Google): tích hợp Google Workspace, có khả năng tìm kiếm thông tin thời gian thực
- Khóa học này dùng: ChatGPT Free hoặc Plus

**Script giảng viên:**

> “Bây giờ chúng ta đi vào thực tế: 4 công cụ AI bạn cần biết.”
>
> “ChatGPT của OpenAI là công cụ phổ biến nhất thế giới. Bạn có thể dùng miễn phí tại chat.openai.com, không cần cài đặt, chỉ cần tạo tài khoản.”
>
> “Microsoft Copilot đặc biệt hữu ích nếu bạn dùng Office 365. Nó tích hợp vào Word, Excel, Outlook và Teams, phù hợp với công việc văn phòng và báo cáo.”
>
> “Claude của Anthropic rất mạnh trong phân tích văn bản dài. Nếu bạn cần đọc báo cáo 50 trang và tóm tắt thành 1 trang, Claude là lựa chọn tốt.”
>
> “Gemini của Google tích hợp với Google Workspace và có khả năng tìm kiếm thông tin thực tế.”
>
> “Trong khóa học này, chúng ta thực hành với ChatGPT. Nếu bạn chưa có tài khoản, hãy tạo trước tại chat.openai.com.”
>
> “Lưu ý quan trọng: đây là các công cụ AI công cộng. Thông tin bạn nhập vào có thể rời khỏi tầm kiểm soát của Vinmec. Vì vậy tuyệt đối không nhập thông tin bệnh nhân. Chúng ta sẽ nói kỹ hơn ở Bài 2.”

**Demo live:**
- Mở nhanh `chat.openai.com`, chỉ giao diện chính
- Không đăng nhập bằng tài khoản chứa thông tin cá nhân nhạy cảm

**Chỉ dẫn video / màn hình:**
- Có thể dùng picture-in-picture khi demo
- Khi nói “KHÔNG nhập thông tin bệnh nhân”, hiển thị text overlay đỏ

---

## QUIZ A: KIỂM TRA NHANH – AI TOOLS | 19:00 – 20:00

**Nội dung quiz:**

Q1: Tính năng nào ChatGPT Free thường không có hoặc bị giới hạn tùy thời điểm?
- A. Soạn thảo văn bản
- B. Dịch ngôn ngữ
- C. Tìm kiếm web thời gian thực
- D. Trả lời câu hỏi

Q2: Bạn đang dùng Office 365 và cần AI hỗ trợ trong Word, nên dùng công cụ nào?
- A. ChatGPT Free
- B. Microsoft Copilot
- C. Gemini
- D. Claude

**Đáp án:**
- Q1: C
- Q2: B

**Chỉ dẫn video / màn hình:**
- Hiển thị câu hỏi → dừng hình 5 giây → overlay “Dừng video – Suy nghĩ trước khi xem đáp án”
- Sau 5 giây hiện đáp án với animation
- GV giải thích ngắn cho từng đáp án

---

## SLIDE 7: WORKFLOW AUTOMATION – TỪ THỦ CÔNG ĐẾN TỰ ĐỘNG | 20:00 – 23:30

**Nội dung slide:**
- Level 01 – Thủ công: làm 100% bằng tay, tốn thời gian, dễ sai sót
- Level 02 – AI-Hỗ trợ: AI làm nháp → bạn review → nhanh hơn 3–5 lần
- Level 03 – AI-Tự động: AI hoàn thành → người kiểm tra và phê duyệt
- Insight: Khóa học này dạy bạn làm chủ Level 02

**Script giảng viên:**

> “Bây giờ chúng ta nói về Workflow Automation – một trong những ứng dụng thực tế nhất của AI.”
>
> “Có 3 cấp độ ứng dụng AI trong quy trình làm việc. Level 1 là thủ công: bạn làm 100% bằng tay, từ soạn email, nhập số liệu, tìm tài liệu đến viết báo cáo. Cách này quen thuộc nhưng tốn thời gian và dễ sai sót.”
>
> “Level 2 là AI-hỗ trợ. Đây là trọng tâm của khóa học. AI làm bản nháp đầu tiên, bạn review, chỉnh sửa và phê duyệt. Kết quả là nhanh hơn 3–5 lần nhưng vẫn giữ con người ở vai trò kiểm soát.”
>
> “Ví dụ: thay vì soạn email báo cáo từ đầu mất 30 phút, bạn yêu cầu ChatGPT soạn nháp trong 30 giây, sau đó mất 5 phút chỉnh sửa là xong.”
>
> “Level 3 là AI-tự động, tương lai gần 1–3 năm nữa. Hệ thống AI tự hoàn thành nhiều bước, con người kiểm tra và phê duyệt cuối cùng.”
>
> “Bạn có thể hình dung như lái xe: Level 1 là xe số sàn, bạn làm mọi thao tác. Level 2 là xe số tự động, công cụ hỗ trợ nhưng tay lái vẫn là bạn. Level 3 là xe tự lái. Trong khóa này, chúng ta học cách lái xe số tự động.”

**Chỉ dẫn video / màn hình:**
- Chỉ lần lượt vào 3 cột từ trái sang phải
- Nhấn mạnh cột Level 02 bằng màu xanh
- Có thể dùng graphic 3 cấp độ xe hơi

**Lưu ý giảng viên:**
- Kết nối câu hỏi tự suy nghĩ: “Công việc nào của bạn đang ở Level 1 và có thể đưa lên Level 2?”

---

## SLIDE 8: CƠ HỘI AI-AUTOMATION CHO NHÂN VIÊN VINMEC | 23:30 – 27:00

**Nội dung slide:**

| Nhóm vai trò | Ứng dụng AI | Giá trị ước tính |
|--------------|-------------|------------------|
| Hành chính / Nhân sự | Soạn thông báo nội bộ → ChatGPT soạn nháp | Tiết kiệm 20–30 phút/tài liệu |
| Bác sĩ / Dược sĩ | Dịch tài liệu y văn tiếng Anh → AI dịch + tóm tắt | Tiết kiệm 30–45 phút/bài báo |
| Điều dưỡng / KTV | Soạn hướng dẫn bệnh nhân → AI viết ngôn ngữ đơn giản | Tiết kiệm 15–25 phút |
| Quản lý / Trưởng khoa | Báo cáo định kỳ → AI cấu trúc khung báo cáo | Tiết kiệm 40–60 phút/báo cáo |

**Nguyên tắc vàng:** AI tạo bản nháp → nhân viên kiểm tra và chịu toàn bộ trách nhiệm.

**Script giảng viên:**

> “Bây giờ hãy nhìn vào công việc của bạn. Ở bất kỳ vị trí nào tại Vinmec, AI đều có thể giúp ích nếu dùng đúng cách.”
>
> “Bạn làm hành chính hoặc nhân sự? Thay vì soạn thông báo nội bộ từng câu, bạn yêu cầu ChatGPT soạn bản nháp trong 30 giây, sau đó chỉnh lại theo văn hóa Vinmec.”
>
> “Bạn là bác sĩ hoặc dược sĩ? Khi cần đọc bài báo y văn tiếng Anh, AI có thể dịch và tóm tắt điểm chính trong vài phút. Bạn vẫn phải kiểm tra thuật ngữ và nội dung chuyên môn.”
>
> “Điều dưỡng hoặc kỹ thuật viên? Khi cần soạn tờ hướng dẫn cho bệnh nhân bằng ngôn ngữ dễ hiểu, AI có thể tạo bản nháp rất nhanh.”
>
> “Quản lý hoặc trưởng khoa? Báo cáo định kỳ, phân tích vấn đề, chuẩn bị họp – AI có thể giúp cấu trúc khung báo cáo, còn bạn điền dữ liệu thực tế và phê duyệt.”
>
> “Nguyên tắc vàng: AI tạo bản nháp. Bạn kiểm tra, chỉnh sửa và chịu toàn bộ trách nhiệm về nội dung cuối cùng. Không thể đổ lỗi cho AI khi có sai sót.”

**Chỉ dẫn video / màn hình:**
- Mỗi vai trò hiển thị thành một card
- Dòng nguyên tắc vàng cần bold, highlight màu nổi

---

## SLIDE 9: PROMPT LÀ GÌ? | 27:00 – 30:00

**Nội dung slide:**
- Prompt = câu lệnh/yêu cầu/câu hỏi bạn nhập vào AI
- Prompt tốt: rõ ràng, có ngữ cảnh, xác định vai trò, chỉ định định dạng
- Prompt xấu: mơ hồ, thiếu context, không có mục đích rõ ràng
- So sánh:
  - Xấu: “Viết email”
  - Tốt: “Viết email ngắn gọn dưới 100 chữ, thông báo lịch họp 2h chiều thứ Sáu tại phòng họp B4, gửi trưởng các khoa lâm sàng, giọng lịch sự và súc tích.”

**Script giảng viên:**

> “Prompt là câu lệnh, yêu cầu hoặc câu hỏi bạn nhập vào AI. Chất lượng câu trả lời của AI phụ thuộc trực tiếp vào chất lượng prompt của bạn.”
>
> “Hãy nghĩ thế này: nếu bạn giao việc cho nhân viên mới bằng câu ‘Viết email đi’, bạn sẽ nhận được gì? Một email rất chung chung, có thể không đúng ý.”
>
> “Nhưng nếu bạn nói: ‘Viết email thông báo lịch họp giao ban vào 2 giờ chiều thứ Sáu tại phòng họp B4, dành cho trưởng các khoa lâm sàng, giọng văn lịch sự nhưng súc tích’, thì kết quả sẽ cụ thể hơn nhiều.”
>
> “Phần tiếp theo, chúng ta học một mô hình cụ thể để viết prompt tốt: mô hình CRAFT.”

---

## SLIDE 10: MÔ HÌNH CRAFT – 5 YẾU TỐ PROMPT HIỆU QUẢ | 30:00 – 35:00

**Nội dung slide:**
- C – Context (Ngữ cảnh): bạn là ai, tình huống cụ thể
- R – Role (Vai trò): AI cần đóng vai gì
- A – Action (Hành động): viết, tóm tắt, dịch, phân tích, tạo
- F – Format (Định dạng): bảng, danh sách, đoạn văn, số từ, ngôn ngữ
- T – Tone (Giọng văn): chuyên nghiệp, thân thiện, súc tích, học thuật

**Script giảng viên:**

> “CRAFT là từ viết tắt của 5 yếu tố tạo nên một prompt hoàn chỉnh. Khi bạn viết prompt đủ 5 yếu tố này, AI sẽ trả lời chính xác hơn nhiều.”
>
> “C là Context – ngữ cảnh. Bạn là ai, làm ở đâu, tình huống cụ thể là gì. AI không biết gì về bạn trừ khi bạn cho nó biết.”
>
> “R là Role – vai trò. Bạn có thể yêu cầu AI đóng vai biên dịch viên y tế, trợ lý hành chính, chuyên gia giáo dục bệnh nhân, hoặc biên tập viên nội dung.”
>
> “A là Action – hành động. Hãy dùng động từ rõ ràng: viết, tóm tắt, dịch, phân tích, liệt kê, tạo checklist.”
>
> “F là Format – định dạng. Bạn muốn bảng 3 cột, bullet points, đoạn văn dưới 200 từ hay email có tiêu đề rõ ràng? Hãy nói cụ thể.”
>
> “T là Tone – giọng văn. Email công việc cần chuyên nghiệp. Tài liệu giải thích cho bệnh nhân cần thân thiện, dễ hiểu và tránh thuật ngữ quá khó.”
>
> “Trong slide tiếp theo, chúng ta xem một ví dụ CRAFT đầy đủ.”

**Lưu ý quay:**
- Đây là slide trung tâm của Bài 1, không nói vội
- Sau mỗi chữ cái, dừng 2 giây để học viên ghi nhớ

---

## SLIDE 11: CRAFT – VÍ DỤ THỰC TẾ VINMEC | 35:00 – 38:00

**Nội dung slide:**

**Prompt xấu:** “Viết email thông báo”

**Prompt CRAFT đầy đủ:**
- C: Tôi là điều phối viên khoa Nội Tim mạch tại Vinmec Hà Nội
- R: Bạn là trợ lý hành chính chuyên nghiệp
- A: Viết email thông báo lịch họp giao ban tháng 12
- F: Ngắn gọn dưới 150 từ, có tiêu đề, lời mở và kết thúc lịch sự
- T: Giọng văn trang trọng, phù hợp môi trường bệnh viện

**Script giảng viên:**

> “Hãy xem sự khác biệt giữa prompt xấu và prompt CRAFT đầy đủ.”
>
> “Prompt xấu là: ‘Viết email thông báo’. AI sẽ tạo một email chung chung, thiếu thông tin, và bạn phải sửa rất nhiều.”
>
> “Bây giờ xem prompt CRAFT: Tôi là điều phối viên khoa Nội Tim mạch tại Vinmec Hà Nội. Bạn là trợ lý hành chính chuyên nghiệp. Hãy viết email thông báo lịch họp giao ban tháng 12. Email ngắn gọn dưới 150 từ, có tiêu đề, lời mở và kết thúc lịch sự. Giọng văn trang trọng, phù hợp môi trường bệnh viện.”
>
> “Với prompt này, AI có thể tạo ra một email gần như dùng được ngay. Thay vì mất 20 phút soạn từ đầu, bạn mất 1 phút viết prompt và vài phút chỉnh sửa.”
>
> “Trong phần thực hành tiếp theo, bạn sẽ tự viết một prompt CRAFT cho tình huống của mình.”

---

## QUIZ B + THỰC HÀNH B: MÔ HÌNH CRAFT | 38:00 – 39:00

**Quiz:** Prompt nào hoàn chỉnh nhất theo CRAFT?

A. “Dịch tài liệu này sang tiếng Việt.”

B. “Tôi là dược sĩ Vinmec. Hãy dịch đoạn sau từ tiếng Anh sang tiếng Việt y khoa, giữ thuật ngữ chuyên môn, dưới 200 từ, giọng văn học thuật: [đoạn cần dịch].”

**Đáp án:** B

**Thực hành:**
- Dừng video 30 giây
- Yêu cầu học viên viết 1 prompt CRAFT cho 1 tình huống thực tế trong công việc

**Chỉ dẫn video / màn hình:**
- Quiz: dừng 5 giây → overlay “Suy nghĩ – Đáp án B” → GV giải thích ngắn
- Thực hành: dừng 30 giây + timer countdown + text “Viết prompt của bạn trước khi tiếp tục”

---

## SLIDE 12–13: VÍ DỤ ỨNG DỤNG THỰC TẾ (1–4) | 39:00 – 41:30

**Nội dung slide:**
- VD1 – Email chuyên nghiệp: soạn email đề nghị bổ sung nhân sự cho khoa Nhi
- VD2 – Báo cáo ca trực: tóm tắt 5 điểm quan trọng nhất của ca trực đêm
- VD3 – Tra cứu thuốc: tóm tắt liều Amoxicillin cho trẻ em theo hướng dẫn Bộ Y tế Việt Nam 2024
- VD4 – Khảo sát: tạo 10 câu hỏi khảo sát mức độ hài lòng bệnh nhân sau phẫu thuật

**Script giảng viên:**

> “Bây giờ tôi sẽ chạy qua 4 ví dụ thực tế, mỗi ví dụ tương ứng với một nhóm công việc khác nhau tại Vinmec.”
>
> “Ví dụ 1: email chuyên nghiệp. Đây là tình huống rất phổ biến cho nhân viên hành chính và quản lý.”
>
> “Ví dụ 2: báo cáo ca trực. AI có thể giúp cấu trúc lại thông tin từ ghi chú của bạn thành một bản báo cáo rõ ràng hơn. Lưu ý: khi thực hành, dùng dữ liệu giả hoặc đã ẩn danh.”
>
> “Ví dụ 3 rất quan trọng: tra cứu thuốc. AI có thể hỗ trợ định hướng ban đầu, nhưng AI có thể sai về liều thuốc hoặc nguồn tham khảo. Luôn xác minh với tài liệu y khoa chính thống, dược điển, hướng dẫn Bộ Y tế hoặc dược sĩ phụ trách.”
>
> “Ví dụ 4: tạo câu hỏi khảo sát. Đây là việc AI làm rất tốt, giúp tiết kiệm thời gian brainstorm và chuẩn hóa câu hỏi.”

**Lưu ý quay:**
- Khi nói ví dụ 3, cần nhấn mạnh kiểm chứng nguồn
- Không dùng dữ liệu bệnh nhân thật trong bất kỳ ví dụ nào

---

## THỰC HÀNH C: VIẾT PROMPT CHO TÌNH HUỐNG CỦA BẠN | 41:30 – 42:00

**Nội dung thực hành:**

Chọn 1 trong 3 tình huống sau và viết prompt CRAFT hoàn chỉnh:
- A. Soạn email xin nghỉ phép dài ngày cho trưởng khoa
- B. Dịch tóm tắt bài báo y văn tiếng Anh sang tiếng Việt
- C. Tạo checklist chuẩn bị dụng cụ trước phẫu thuật

**Chỉ dẫn video / màn hình:**
- Dừng video 15 giây để học viên viết prompt
- Overlay: “Thử viết prompt CRAFT trước khi tiếp tục”

---

## SLIDE 14–15: KỸ THUẬT NÂNG CAO + ĐIỂM MẠNH/YẾU AI | 42:00 – 43:30

**Nội dung slide:**

**Kỹ thuật nâng cao:**
- Few-shot: cho AI xem ví dụ mẫu trước khi yêu cầu
- Chain-of-Thought: yêu cầu AI suy luận từng bước khi xử lý vấn đề phức tạp

**AI giỏi:**
- Soạn thảo
- Dịch
- Tóm tắt
- Brainstorm
- Cấu trúc nội dung
- Giải thích khái niệm

**AI yếu/cần cẩn thận:**
- Số liệu cụ thể
- Liều thuốc
- Thông tin thời sự mới
- Chẩn đoán lâm sàng
- Quyết định điều trị cuối cùng

**Script giảng viên:**

> “Hai slide cuối trước phần tổng kết là kỹ thuật nâng cao và bảng điểm mạnh/yếu của AI.”
>
> “Few-shot là kỹ thuật cho AI xem ví dụ mẫu trước khi yêu cầu. Ví dụ: bạn đưa 2 email mẫu theo phong cách Vinmec, sau đó nhờ AI viết email mới theo phong cách đó.”
>
> “Chain-of-Thought là khi giải quyết vấn đề phức tạp, bạn yêu cầu AI suy nghĩ từng bước rồi mới đưa ra kết quả. Điều này giúp AI không bỏ sót bước, nhưng bạn vẫn phải kiểm tra lại kết luận.”
>
> “Hãy nhớ bảng điểm mạnh/yếu: AI rất giỏi soạn thảo, dịch, tóm tắt, brainstorm. Nhưng với số liệu y khoa, liều thuốc, thông tin thời sự hoặc chẩn đoán lâm sàng, luôn kiểm tra nguồn chính thống.”

---

## QUIZ D: AI ĐÚNG CHỖ HAY SAI CHỖ? | 43:30 – 44:00

**Nội dung quiz:**

4 tình huống – AI phù hợp hay không phù hợp?
1. Dùng AI soạn thông báo lịch tiêm vaccine cho bệnh nhân
2. Dùng AI quyết định liều Heparin cho bệnh nhân nhồi máu cơ tim cấp
3. Dùng AI dịch tài liệu hướng dẫn kỹ thuật mổ từ tiếng Anh
4. Dùng AI phân tích kết quả xét nghiệm và đưa ra chẩn đoán cuối cùng

**Đáp án:**
- 1: Phù hợp nếu không có dữ liệu bệnh nhân thật và có kiểm duyệt
- 2: Không phù hợp
- 3: Phù hợp nếu kiểm tra thuật ngữ và nguồn
- 4: Không phù hợp

**Chỉ dẫn video / màn hình:**
- Hiện câu hỏi → dừng 5 giây → hiện đáp án từng câu
- GV giải thích 1 câu ngắn cho mỗi đáp án

---

## SLIDE 16: TỔNG KẾT BÀI 1 | 44:00 – 45:00

**Nội dung slide:**

5 điều bạn vừa học:
- AI là công cụ hỗ trợ; LLM hoạt động bằng xác suất từ nên có thể hallucinate
- Biết 4 công cụ AI phổ biến và cách bắt đầu với ChatGPT
- Hiểu AI giúp workflow automation: Thủ công → AI-Hỗ trợ → AI-Tự động
- Viết prompt theo mô hình CRAFT
- Biết AI giỏi gì và cần cẩn thận gì

Bước tiếp theo: Bài 2 – AI An toàn & Tuân thủ tại Vinmec

**Script giảng viên:**

> “Chúng ta vừa hoàn thành Bài 1. Hãy chốt lại 5 điều quan trọng nhất.”
>
> “Một: AI là công cụ hỗ trợ, và LLM hoạt động bằng xác suất từ nên có thể tạo thông tin sai. Hai: bạn đã biết 4 công cụ AI phổ biến và cách bắt đầu với ChatGPT. Ba: AI có thể hỗ trợ workflow automation ở cấp độ AI-hỗ trợ. Bốn: CRAFT giúp bạn viết prompt rõ ràng hơn. Năm: AI rất giỏi soạn thảo, dịch, tóm tắt, brainstorm, nhưng cần cẩn thận với thông tin y tế, liều thuốc và chẩn đoán.”
>
> “Trong Bài 2, chúng ta sẽ nói về một khía cạnh cũng quan trọng không kém: dùng AI an toàn trong môi trường y tế, tuân thủ pháp luật và bảo vệ thông tin bệnh nhân.”
>
> “Hẹn gặp bạn ở Bài 2.”

**Chỉ dẫn video / màn hình:**
- Hiện 5 điểm với animation tick
- Kết thúc nhìn thẳng camera, giọng ấm, không vội

---

# BÀI 2: AI AN TOÀN & TUÂN THỦ TẠI VINMEC | 45 PHÚT

## Bảng phân bổ thời gian – Bài 2

| Phút | Slide / Hoạt động | Nội dung |
|------|-------------------|----------|
| 00:00–01:00 | S1B2 – Cover + Recap Bài 1 | Nhắc 3 điểm chính, giới thiệu mục tiêu Bài 2 |
| 01:00–06:00 | S2B2 – Câu chuyện Hoa | Hallucination case → bài học kiểm chứng |
| 06:00–11:00 | S3B2 – Luật 91/2025 | Quyền bệnh nhân, nghĩa vụ cơ sở y tế, dữ liệu nhạy cảm |
| 11:00–15:00 | S4B2 – Xử lý dữ liệu với AI | Dữ liệu nào được/không được dùng với AI công cộng |
| 15:00–20:00 | S5B2 – Bias & hạn chế AI y tế | Thiên kiến dữ liệu, 4 hạn chế cố hữu |
| 20:00–21:00 | Quiz E | Hallucination case |
| 21:00–26:00 | S6B2 – FATE Framework | Fairness, Accountability, Transparency, Ethics |
| 26:00–31:00 | S7B2 – FATE Case Study | AI đọc X-quang tại Vinmec – checklist FATE |
| 31:00–35:00 | S8B2 – 5 nguyên tắc đạo đức AI | Minh bạch, Kiểm chứng, Trách nhiệm, Không phụ thuộc, Bảo vệ BN |
| 35:00–38:00 | S9B2 – Được/Không được dùng AI | Checklist + rule of thumb |
| 38:00–40:00 | Quiz F + Thực hành G | Nhận diện vi phạm dữ liệu + prompt CRAFT an toàn |
| 40:00–43:00 | S10B2 – CRAFT + An toàn | Ẩn danh hóa → CRAFT → AI xử lý → Review & Kiểm chứng |
| 43:00–44:00 | Thực hành H | Đánh giá tình huống tổng hợp |
| 44:00–45:00 | S11B2 – Tổng kết & Cam kết | 5 cam kết sử dụng AI có trách nhiệm |

---

## SLIDE 1 (BÀI 2): COVER & RECAP NHANH BÀI 1 | 00:00 – 01:00

**Nội dung slide:**
- Tiêu đề: “AI An toàn & Tuân thủ tại Vinmec”
- Phụ đề: Bài 2/2 | Chương trình Đào tạo AI Cơ bản Vinmec
- Recap 3 điểm Bài 1:
  - AI là công cụ hỗ trợ
  - LLM có thể hallucinate
  - CRAFT giúp viết prompt hiệu quả

**Script giảng viên:**

> “Chào mừng bạn đến với Bài 2 – AI An toàn và Tuân thủ tại Vinmec.”
>
> “Trước khi vào Bài 2, hãy nhắc nhanh 3 điều quan trọng nhất từ Bài 1.”
>
> “Một: AI là công cụ hỗ trợ, không phải người ra quyết định. Hai: LLM hoạt động bằng xác suất từ, nên có thể tạo thông tin sai – hallucination. Ba: mô hình CRAFT giúp bạn viết prompt hiệu quả.”
>
> “Bài 2 hôm nay trả lời câu hỏi: dùng AI an toàn trong bệnh viện cụ thể là như thế nào?”

---

## SLIDE 2 (BÀI 2): TÌNH HUỐNG – CÂU CHUYỆN CỦA HOA | 01:00 – 06:00

**Nội dung slide:**
- Điều dưỡng Hoa hỏi ChatGPT về liều Amoxicillin cho trẻ 15kg bị viêm phổi
- ChatGPT trả lời tự tin, đầy đủ, có vẻ chính xác
- Bác sĩ phát hiện: AI tham chiếu nghiên cứu không tồn tại
- Bài học: Không bao giờ dùng liều thuốc từ AI mà không xác minh nguồn chính thống

**Script giảng viên:**

> “Tôi muốn bắt đầu Bài 2 bằng một tình huống thực tế – gọi là câu chuyện của Hoa.”
>
> “Hoa là điều dưỡng tại khoa Nhi. Cô cần kiểm tra nhanh liều Amoxicillin cho một bé 15kg bị viêm phổi. Thay vì tra cứu dược điển hoặc hỏi dược sĩ, cô hỏi ChatGPT.”
>
> “ChatGPT trả lời rất tự tin: có liều dùng, cách chia liều, thậm chí trích dẫn tên nghiên cứu và tên tác giả. Câu trả lời trông rất chuyên nghiệp và đáng tin cậy.”
>
> “Nhưng khi bác sĩ trưởng khoa đọc lại, ông phát hiện nghiên cứu mà AI trích dẫn không tồn tại. ChatGPT đã bịa ra một tài liệu nghe có vẻ thật. Đây chính là hallucination điển hình.”
>
> “May mắn là bác sĩ kiểm tra kịp thời. Nhưng nếu không có bước kiểm tra đó thì sao?”
>
> “Bài học là: hallucination không phải AI nói dối có chủ ý. AI không biết nó sai. Nó chỉ tạo ra câu trả lời nghe có vẻ phù hợp nhất. Trong y tế, điều đó có thể rất nguy hiểm.”

**Chỉ dẫn video / màn hình:**
- Kể như một câu chuyện thật, không đọc như báo cáo
- Dừng sau câu “không tồn tại” để nhấn mạnh
- Text overlay: “HALLUCINATION = AI tự tin nhưng sai”

---

## SLIDE 3 (BÀI 2): LUẬT 91/2025 – BẢO VỆ DỮ LIỆU CÁ NHÂN | 06:00 – 11:00

**Nội dung slide:**
- Luật 91/2025 Bảo vệ Dữ liệu Cá nhân: có hiệu lực toàn quốc từ 1/7/2025
- Quyền của bệnh nhân: được biết, được truy cập, được xóa dữ liệu của mình
- Nghĩa vụ cơ sở y tế: xin đồng ý, mã hóa, không chia sẻ trái phép
- 5 nhóm dữ liệu nhạy cảm: y tế, ADN, tôn giáo, tình dục, tội phạm
- Vi phạm: có thể bị phạt đến 5% doanh thu toàn cầu hoặc 10 triệu USD

**Script giảng viên:**

> “Luật Bảo vệ Dữ liệu Cá nhân – Luật 91 năm 2025 – có hiệu lực từ ngày 1 tháng 7 năm 2025. Đây là khung pháp lý rất quan trọng cho ngành y tế Việt Nam.”
>
> “Bệnh nhân có các quyền cơ bản: quyền được biết ai đang sử dụng dữ liệu của họ và dùng cho mục đích gì, quyền truy cập để xem dữ liệu, và quyền yêu cầu xóa dữ liệu theo quy định.”
>
> “Cơ sở y tế như Vinmec có nghĩa vụ xin đồng ý rõ ràng trước khi thu thập và xử lý dữ liệu, bảo vệ dữ liệu nhạy cảm bằng biện pháp phù hợp, và không chia sẻ với bên thứ ba không có thẩm quyền.”
>
> “Đặc biệt quan trọng: dữ liệu sức khỏe là dữ liệu nhạy cảm. Điều này có nghĩa là mức độ bảo vệ phải cao hơn.”
>
> “Liên hệ trực tiếp với AI: khi bạn nhập thông tin bệnh nhân vào ChatGPT, bạn có thể đang chia sẻ dữ liệu nhạy cảm với một công ty bên ngoài, không có sự đồng ý của bệnh nhân và nằm ngoài hệ thống kiểm soát của Vinmec. Đây là rủi ro pháp lý rất nghiêm trọng.”

**Lưu ý quay:**
- Giữ giọng nghiêm túc nhưng không hù dọa
- Nếu chưa có xác nhận pháp chế về mức phạt/diễn giải luật, cần được rà soát trước khi xuất bản

---

## SLIDE 4 (BÀI 2): XỬ LÝ DỮ LIỆU VỚI AI – ĐƯỢC VÀ KHÔNG ĐƯỢC | 11:00 – 15:00

**Nội dung slide:**

**Được dùng với AI công cộng:**
- Thông tin giả lập
- Kiến thức chung y khoa
- Mẫu văn bản
- Quy trình chung
- Tài liệu công khai

**Không được dùng với AI công cộng:**
- Tên, tuổi, địa chỉ, số điện thoại bệnh nhân
- Kết quả xét nghiệm, mã hồ sơ, ảnh/video bệnh nhân
- Thông tin chẩn đoán hoặc điều trị của bệnh nhân cụ thể
- Dữ liệu nội bộ bảo mật của Vinmec

**Nguyên tắc:** Ẩn danh hóa trước khi hỏi AI.

**Vinmec policy:** Không dùng AI công cộng cho dữ liệu bệnh nhân thật; chỉ dùng AI nội bộ được phê duyệt.

**Script giảng viên:**

> “Vậy cụ thể, loại dữ liệu nào được và không được dùng với AI công cộng như ChatGPT?”
>
> “Được: bạn có thể hỏi về kiến thức y khoa chung, dùng thông tin giả lập, nhờ AI soạn mẫu email, mẫu báo cáo, hoặc hỏi về quy trình hành chính chung không liên quan đến bệnh nhân cụ thể.”
>
> “Không được: bất kỳ thông tin nào có thể nhận dạng bệnh nhân. Tên, tuổi, địa chỉ, số điện thoại, kết quả xét nghiệm, ảnh CT, mã hồ sơ, thông tin chẩn đoán của một bệnh nhân cụ thể.”
>
> “Nguyên tắc đơn giản: trước khi hỏi AI, hãy tự hỏi thông tin này có thể nhận dạng được bệnh nhân không. Nếu có, không dùng AI công cộng.”
>
> “Chính sách Vinmec: chỉ dùng AI nội bộ được phê duyệt để xử lý dữ liệu bệnh nhân thật.”

---

## SLIDE 5 (BÀI 2): BIAS & HẠN CHẾ CỐ HỮU CỦA AI TRONG Y TẾ | 15:00 – 20:00

**Nội dung slide:**
- Thiên kiến (Bias): AI học từ dữ liệu lịch sử nên thừa hưởng thiên kiến trong dữ liệu đó
- Ví dụ: dữ liệu AI y tế chủ yếu từ Mỹ/châu Âu có thể không phù hợp hoàn toàn với bệnh nhân Việt Nam
- 4 hạn chế cố hữu:
  - Knowledge cutoff
  - Không có bối cảnh bệnh nhân cụ thể
  - Không chịu trách nhiệm pháp lý
  - Thiếu ngữ cảnh văn hóa và thực hành y tế Việt Nam

**Script giảng viên:**

> “Bên cạnh hallucination, AI còn có 2 vấn đề quan trọng khác: thiên kiến và hạn chế cố hữu.”
>
> “Thiên kiến trong AI xuất phát từ dữ liệu huấn luyện. AI học từ hàng tỷ văn bản, nhưng những văn bản đó không đại diện đều cho tất cả nhóm người và hệ thống y tế.”
>
> “Ví dụ, nhiều dữ liệu y khoa lớn đến từ Mỹ và châu Âu. Điều này có thể khiến AI đưa ra gợi ý không hoàn toàn phù hợp với bệnh nhân Việt Nam, đặc biệt với các bệnh đặc thù như thalassemia, viêm gan B mãn tính hoặc bệnh nhiệt đới.”
>
> “4 hạn chế cố hữu cần nhớ là: một, AI có knowledge cutoff nên có thể không biết thông tin mới; hai, AI không có bối cảnh bệnh nhân cụ thể của bạn; ba, AI không chịu trách nhiệm pháp lý; bốn, AI thiếu ngữ cảnh văn hóa và thực hành y tế Việt Nam.”
>
> “Những hạn chế này không có nghĩa AI vô dụng. Nó có nghĩa là bạn phải biết dùng AI đúng chỗ và kiểm chứng trước khi áp dụng.”

---

## QUIZ E: KIỂM TRA NHANH – HALLUCINATION | 20:00 – 21:00

**Nội dung quiz:**

ChatGPT trả lời về liều Amoxicillin 875mg/125mg an toàn cho phụ nữ mang thai tuần 28. ChatGPT trích dẫn “nghiên cứu Nguyễn et al. 2024 đăng trên The Lancet”.

Câu hỏi: Bạn nên làm gì trước tiên trước khi áp dụng thông tin này?
- A. Áp dụng ngay vì Lancet là tạp chí uy tín
- B. Hỏi lại ChatGPT để xác nhận
- C. Tìm bài báo “Nguyễn et al. 2024” trên PubMed để xác minh
- D. Chia sẻ với đồng nghiệp

**Đáp án:** C – AI có thể bịa ra tài liệu tham khảo trông rất thật.

**Chỉ dẫn video / màn hình:**
- Hiện câu hỏi → dừng 5 giây → hiện đáp án
- GV giải thích ngắn: nguồn nghe uy tín vẫn phải kiểm chứng

---

## SLIDE 6 (BÀI 2): FATE FRAMEWORK – KHUNG QUẢN TRỊ AI | 21:00 – 26:00

**Nội dung slide:**
- F – Fairness (Công bằng): AI không phân biệt đối xử giữa các nhóm bệnh nhân
- A – Accountability (Trách nhiệm): phải xác định rõ ai chịu trách nhiệm khi AI sai
- T – Transparency (Minh bạch): bệnh nhân và đồng nghiệp phải được thông báo khi AI hỗ trợ quyết định
- E – Ethics (Đạo đức): tôn trọng quyền bệnh nhân, bảo vệ dữ liệu, tuân thủ Luật 91/2025

**Script giảng viên:**

> “FATE Framework là công cụ đánh giá và quản trị AI được dùng rộng rãi trong y tế quốc tế. 4 chữ cái F-A-T-E là 4 câu hỏi bạn nên tự hỏi khi đánh giá hoặc đề xuất dùng AI.”
>
> “F là Fairness – công bằng. AI này có đối xử công bằng với mọi nhóm bệnh nhân không? AI có thể vô tình thiên vị nếu dữ liệu huấn luyện không cân bằng.”
>
> “A là Accountability – trách nhiệm. Khi AI đưa ra kết quả sai, ai chịu trách nhiệm? Không thể nói ‘AI sai’. Bác sĩ ký kết quả, nhân viên phê duyệt nội dung, hoặc đơn vị triển khai vẫn phải chịu trách nhiệm theo vai trò của mình.”
>
> “T là Transparency – minh bạch. Bệnh nhân và đồng nghiệp có biết AI đang được dùng không? Nếu AI hỗ trợ đọc kết quả hoặc soạn nội dung có ảnh hưởng đến chăm sóc bệnh nhân, cần minh bạch.”
>
> “E là Ethics – đạo đức. AI này có tôn trọng quyền và phẩm giá của bệnh nhân không? Dữ liệu có được bảo vệ đúng cách không? Có tuân thủ Luật 91/2025 không?”
>
> “Hãy nhớ FATE như một checklist nhanh mỗi khi bạn nghe đề xuất dùng AI tại Vinmec.”

**Chỉ dẫn video / màn hình:**
- Hiển thị 2x2 grid với 4 ô F/A/T/E
- Khi nói từng chữ, zoom hoặc highlight ô đó

**Lưu ý giảng viên:**
- FATE là nội dung mới, cần giải thích chậm và dễ hiểu
- Liên hệ: F với bias, A với hallucination và trách nhiệm, T với minh bạch, E với Luật 91 và đạo đức

---

## SLIDE 7 (BÀI 2): FATE TRONG THỰC TIỄN – CASE STUDY AI TẠI VINMEC | 26:00 – 31:00

**Nội dung slide:**

**Tình huống:** Vinmec xem xét triển khai AI hỗ trợ đọc ảnh X-quang tại Khoa Chẩn đoán Hình ảnh.

**Checklist FATE:**
- F: AI có được huấn luyện trên dữ liệu người Việt Nam không? Hiệu quả có đồng đều giữa các nhóm tuổi/giới không?
- A: Bác sĩ CĐHA ký kết quả và chịu trách nhiệm pháp lý cuối cùng. Cần quy trình rõ ràng về quyền override.
- T: Phiếu kết quả ghi rõ “Đọc kết quả có hỗ trợ phần mềm AI – Bác sĩ [Tên] xác nhận ngày [date]”.
- E: Dữ liệu ảnh được mã hóa, không gửi server nước ngoài, tuân thủ Luật 91/2025.

**Script giảng viên:**

> “Bây giờ hãy áp dụng FATE vào một tình huống thực tế: Vinmec xem xét triển khai phần mềm AI hỗ trợ đọc ảnh X-quang tại Khoa Chẩn đoán Hình ảnh.”
>
> “Hỏi F – Fairness: phần mềm này có được huấn luyện trên dữ liệu ảnh X-quang của người Việt Nam không? Hay chủ yếu từ người châu Âu và Mỹ? Nếu chưa rõ, cần yêu cầu nhà cung cấp cung cấp báo cáo hiệu quả theo nhóm dân số.”
>
> “Hỏi A – Accountability: ai ký kết quả? Bác sĩ Chẩn đoán Hình ảnh vẫn phải ký và chịu trách nhiệm pháp lý cuối cùng. AI chỉ là công cụ hỗ trợ, không thể ký bệnh án. Cần quy trình rõ ràng: AI gợi ý đến đâu, bác sĩ có quyền override không, và khi nào cần override.”
>
> “Hỏi T – Transparency: cần ghi rõ trong phiếu kết quả rằng kết quả có hỗ trợ phần mềm AI và đã được bác sĩ xác nhận.”
>
> “Hỏi E – Ethics: dữ liệu ảnh X-quang có được mã hóa không? Có gửi ra server nước ngoài không? Bệnh nhân có được thông báo không? Có tuân thủ Luật 91/2025 không?”
>
> “FATE không chỉ dành cho AI lâm sàng. Ngay cả khi dùng ChatGPT cho công việc hành chính, bạn cũng có thể tự hỏi 4 câu này.”

**Chỉ dẫn video / màn hình:**
- GV đọc như đang điền checklist
- Hiện tick sau mỗi tiêu chí được giải quyết
- Dừng nhẹ ở câu hỏi “server nước ngoài”

---

## SLIDE 8 (BÀI 2): 5 NGUYÊN TẮC ĐẠO ĐỨC AI TẠI VINMEC | 31:00 – 35:00

**Nội dung slide:**
1. Minh bạch: thông báo khi kết quả có hỗ trợ AI trong quyết định lâm sàng
2. Kiểm chứng: luôn xác minh thông tin y tế từ AI bằng nguồn chính thống
3. Trách nhiệm: nhân viên y tế chịu trách nhiệm cuối cùng, không đổ lỗi cho AI
4. Không phụ thuộc: AI hỗ trợ phán đoán lâm sàng, không thay thế phán đoán đó
5. Bảo vệ bệnh nhân: quyền lợi và bảo mật thông tin bệnh nhân luôn là ưu tiên số 1

**Script giảng viên:**

> “Vinmec xây dựng 5 nguyên tắc cốt lõi về đạo đức AI. Đây là những cam kết không thể nhượng bộ.”
>
> “Nguyên tắc 1 – Minh bạch: thông báo khi kết quả có hỗ trợ AI trong quyết định lâm sàng.”
>
> “Nguyên tắc 2 – Kiểm chứng: không bao giờ tin tuyệt đối vào thông tin y tế từ AI. Luôn xác minh.”
>
> “Nguyên tắc 3 – Trách nhiệm: bạn là nhân viên y tế, bạn chịu trách nhiệm. Không thể đổ lỗi cho AI.”
>
> “Nguyên tắc 4 – Không phụ thuộc: AI giúp bạn nghĩ nhanh hơn, không nghĩ thay bạn. Phán đoán lâm sàng vẫn là của bạn.”
>
> “Nguyên tắc 5 – Bảo vệ bệnh nhân: trong mọi quyết định liên quan đến AI, câu hỏi đầu tiên luôn là: điều này có tốt cho bệnh nhân của tôi không?”

---

## SLIDE 9 (BÀI 2): ĐƯỢC VÀ KHÔNG ĐƯỢC DÙNG AI TẠI VINMEC | 35:00 – 38:00

**Nội dung slide:**

**Được:**
- Soạn thảo tài liệu hành chính không chứa dữ liệu bệnh nhân
- Dịch/tóm tắt tài liệu công khai
- Hỏi kiến thức y khoa chung và luôn kiểm chứng
- Brainstorm ý tưởng
- Tạo mẫu văn bản, checklist, câu hỏi khảo sát

**Không được:**
- Nhập dữ liệu bệnh nhân thật
- Dùng AI ra quyết định điều trị cuối cùng
- Dùng AI thay thế tư vấn chuyên gia
- Tải tài liệu nội bộ bảo mật lên AI công cộng

**Rule of Thumb:** Nếu bạn không thoải mái khi đọc to thông tin đó trong phòng họp, đừng cho AI biết.

**Script giảng viên:**

> “Đây là slide có thể lưu lại và dùng như tờ nhắc nhở hằng ngày: được và không được dùng AI.”
>
> “Được: soạn thảo, dịch, tóm tắt tài liệu hành chính; hỏi kiến thức y khoa chung; brainstorm ý tưởng; tạo mẫu văn bản hoặc checklist.”
>
> “Không được: nhập thông tin nhận dạng bệnh nhân; dùng AI để quyết định điều trị; thay thế tư vấn chuyên gia; hoặc tải tài liệu nội bộ bảo mật lên AI công cộng.”
>
> “Rule of thumb đơn giản nhất: nếu bạn không thoải mái khi đọc to thông tin đó trong phòng họp trước mặt bệnh nhân và đồng nghiệp, thì đừng bao giờ cho AI biết thông tin đó.”

---

## QUIZ F + THỰC HÀNH G: NHẬN DIỆN VI PHẠM & CRAFT AN TOÀN | 38:00 – 40:00

**Quiz:** Hành động nào vi phạm chính sách AI Vinmec?

- A. Hỏi ChatGPT về liều Metformin theo hướng dẫn Bộ Y tế 2024
- B. Paste kết quả xét nghiệm của bệnh nhân Nguyễn Văn A vào ChatGPT để phân tích
- C. Nhờ AI soạn email thông báo lịch họp khoa
- D. Dùng AI dịch hướng dẫn sử dụng thiết bị y tế từ tiếng Anh

**Đáp án:** B – vi phạm Luật 91/2025 và chính sách bảo mật Vinmec.

**Thực hành G:**
- Dừng 30 giây
- Viết 1 prompt CRAFT an toàn, sử dụng thông tin giả định thay vì thông tin bệnh nhân thật

**Chỉ dẫn video / màn hình:**
- Hiển thị câu hỏi → dừng 5 giây → hiện đáp án
- Sau quiz, chuyển sang timer 30 giây cho thực hành

---

## SLIDE 10 (BÀI 2): CRAFT + AN TOÀN – QUY TRÌNH TÍCH HỢP | 40:00 – 43:00

**Nội dung slide:**

Quy trình 4 bước:
1. Ẩn danh hóa
2. Viết CRAFT
3. AI xử lý
4. Review & Kiểm chứng

**Ẩn danh hóa:**
- Thay tên thật bằng BN_01
- Thay ngày sinh bằng độ tuổi
- Xóa mã hồ sơ, số phòng, số điện thoại, địa chỉ
- Dùng thông tin giả lập khi luyện tập

**Sau khi nhận kết quả AI:**
- Kiểm tra nguồn
- Xác minh số liệu
- Áp dụng kinh nghiệm lâm sàng
- Quyết định cuối cùng thuộc về nhân viên y tế

**Script giảng viên:**

> “Bây giờ tích hợp tất cả lại. Quy trình sử dụng AI an toàn tại Vinmec gồm 4 bước.”
>
> “Bước 1 – Ẩn danh hóa. Trước khi hỏi AI về một tình huống cụ thể, thay thông tin nhận dạng bằng thông tin giả. Tên bệnh nhân thành BN_01. Ngày sinh cụ thể thành độ tuổi. Xóa mã hồ sơ, số phòng, số điện thoại và địa chỉ.”
>
> “Bước 2 – Viết prompt CRAFT. Dùng mô hình đã học để viết yêu cầu rõ ràng, có ngữ cảnh, vai trò, hành động, định dạng và giọng văn.”
>
> “Bước 3 – AI xử lý. Nhận kết quả từ AI.”
>
> “Bước 4 – Review và kiểm chứng. Đọc kỹ, kiểm tra nguồn thông tin, xác minh số liệu y khoa, áp dụng kinh nghiệm lâm sàng của bạn.”
>
> “Kết quả cuối cùng do bạn quyết định. 4 bước này nên trở thành thói quen tự động mỗi khi bạn dùng AI trong công việc.”

---

## THỰC HÀNH H: ĐÁNH GIÁ TÌNH HUỐNG TỔNG HỢP | 43:00 – 44:00

**Nội dung thực hành:**

Điều dưỡng Lan cần soạn tài liệu giải thích cho bệnh nhân Nguyễn Thị B, 56 tuổi, tiểu đường type 2, về cách tự theo dõi đường huyết tại nhà. Tài liệu cần ngôn ngữ đơn giản, dễ hiểu.

**Yêu cầu:** Dừng 30 giây và viết prompt CRAFT an toàn cho tình huống này.

**Gợi ý đáp án:**
- Ẩn danh hóa bệnh nhân
- C: Tôi là điều dưỡng tại Vinmec, đang soạn tài liệu giáo dục bệnh nhân về tự theo dõi đường huyết tại nhà
- R: Bạn là chuyên gia giáo dục sức khỏe cho bệnh nhân
- A: Soạn tài liệu hướng dẫn cách tự theo dõi đường huyết tại nhà
- F: Dưới 300 từ, bullet points, ngôn ngữ dễ hiểu, có phần “khi nào cần liên hệ nhân viên y tế”
- T: Thân thiện, ân cần, dễ hiểu

**Chỉ dẫn video / màn hình:**
- Dừng 30 giây với timer
- Sau đó hiện prompt mẫu đã ẩn danh hóa

---

## SLIDE 11 (BÀI 2): TỔNG KẾT & CAM KẾT SỬ DỤNG AI CÓ TRÁCH NHIỆM | 44:00 – 45:00

**Nội dung slide:**

5 cam kết sử dụng AI có trách nhiệm tại Vinmec:
- Tôi sẽ kiểm chứng mọi thông tin y tế từ AI trước khi dùng
- Tôi sẽ không nhập thông tin bệnh nhân vào AI công cộng
- Tôi sẽ thông báo khi kết quả có hỗ trợ AI trong bối cảnh cần minh bạch
- Tôi sẽ chịu trách nhiệm về nội dung tôi ký duyệt dù AI soạn nháp
- Tôi sẽ dùng FATE Framework khi đánh giá ứng dụng AI mới tại Vinmec

**Script giảng viên:**

> “Chúng ta vừa hoàn thành Bài 2 – và cũng là toàn bộ khóa Đào tạo AI Cơ bản Vinmec.”
>
> “Tôi muốn kết thúc không phải bằng tổng kết kiến thức, mà bằng 5 cam kết. Đây là những hành động cụ thể tôi muốn bạn mang theo từ khóa học này.”
>
> “Một: tôi sẽ kiểm chứng mọi thông tin y tế từ AI trước khi dùng. Hai: tôi sẽ không nhập thông tin bệnh nhân vào AI công cộng. Ba: tôi sẽ thông báo khi kết quả có hỗ trợ AI trong những bối cảnh cần minh bạch. Bốn: tôi sẽ chịu trách nhiệm về nội dung tôi ký duyệt dù AI soạn nháp. Năm: tôi sẽ dùng FATE Framework khi đánh giá ứng dụng AI mới tại Vinmec.”
>
> “AI là một công cụ mạnh mẽ. Dùng đúng cách, nó sẽ giúp bạn phục vụ bệnh nhân tốt hơn, nhanh hơn và với chất lượng cao hơn. Nhưng luôn nhớ: trí tuệ chuyên môn và đạo đức nghề nghiệp của bạn là thứ AI không bao giờ có thể thay thế.”
>
> “Chúc bạn ứng dụng AI hiệu quả và an toàn trong công việc tại Vinmec. Hẹn gặp lại.”

**Chỉ dẫn video / màn hình:**
- 5 cam kết hiện từng dòng với animation tick
- GV nhìn thẳng camera ở câu kết, giọng ấm và chân thành
- Outro: logo Vinmec + “Chương trình Đào tạo AI Cơ bản” + nhạc nền nhẹ
- Text overlay: “Cảm ơn bạn đã hoàn thành khóa học!”
- CTA: “Làm bài quiz tổng kết tại LMS” hoặc “Tham gia phiên thực hành live”

---

## GHI CHÚ SẢN XUẤT CUỐI

- Bài 1 có nội dung mới trọng tâm: LLM, AI trong y tế, Workflow Automation và cơ hội AI-Automation tại Vinmec.
- Bài 2 có nội dung mới trọng tâm: FATE Framework và case study FATE trong thực tiễn.
- Toàn bộ ví dụ demo phải dùng dữ liệu giả lập hoặc dữ liệu đã ẩn danh hóa.
- Các nội dung pháp lý liên quan Luật 91/2025 và chính sách Vinmec cần được Pháp chế/CNTT rà soát trước khi phát hành chính thức.
- Nếu cần rút ngắn khi quay, ưu tiên giữ: hook, LLM/hallucination, CRAFT, Workflow Automation, Luật 91, dữ liệu được/không được dùng, FATE, CRAFT + An toàn, 5 cam kết.

---

*Draft v3.0 – cập nhật theo `Vinmec_GiaoAn_Video_v2.docx` – 2026-06-24*

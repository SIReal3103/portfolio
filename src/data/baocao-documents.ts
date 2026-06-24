export type BaocaoDocument = {
  id: string;
  label: string;
  path: string;
  group: string;
};

export const BAOCAO_DOCUMENTS: BaocaoDocument[] = [
  {
    id: "ke-hoach-quay-video",
    label: "Kế hoạch quay video",
    path: "/docs/ke-hoach-quay-video.md",
    group: "Tài liệu",
  },
  {
    id: "de-xuat-phuong-an-video",
    label: "Đề xuất phương án video",
    path: "/docs/de-xuat-phuong-an-video.md",
    group: "Tài liệu",
  },
  {
    id: "buoi-01-workshop-timeline-giao-an",
    label: "Buổi 01 - Workshop Timeline & Giáo án",
    path: "/docs/buoi-01-workshop-timeline-giao-an.md",
    group: "Chương trình STEM",
  },
  {
    id: "ke-hoach-trien-khai-chi-tiet",
    label: "Kế hoạch triển khai chi tiết",
    path: "/docs/ke-hoach-trien-khai-chi-tiet.md",
    group: "Chương trình STEM",
  },
  {
    id: "khung-chuong-trinh-stem-steam-vietnam-yeu-cau-syllabus",
    label: "Khung chương trình STEM/STEAM Vietnam - Yêu cầu Syllabus",
    path: "/docs/khung-chuong-trinh-stem-steam-vietnam-yeu-cau-syllabus.md",
    group: "Chương trình STEM",
  },
  {
    id: "nghien-cuu-chuong-trinh-workshop-stem-tieu-hoc-3-thang",
    label: "Nghiên cứu chương trình Workshop STEM Tiểu học 3 tháng",
    path: "/docs/nghien-cuu-chuong-trinh-workshop-stem-tieu-hoc-3-thang.md",
    group: "Chương trình STEM",
  },
];

export const DEFAULT_BAOCAO_DOC_ID = "ke-hoach-quay-video";

export function getBaocaoDocument(id: string | null): BaocaoDocument {
  return BAOCAO_DOCUMENTS.find((d) => d.id === id) ?? BAOCAO_DOCUMENTS[0];
}

export function groupBaocaoDocuments(docs: BaocaoDocument[]): { group: string; items: BaocaoDocument[] }[] {
  const order: string[] = [];
  const map = new Map<string, BaocaoDocument[]>();

  for (const doc of docs) {
    if (!map.has(doc.group)) {
      map.set(doc.group, []);
      order.push(doc.group);
    }
    map.get(doc.group)!.push(doc);
  }

  return order.map((group) => ({ group, items: map.get(group)! }));
}

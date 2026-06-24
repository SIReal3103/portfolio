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

/* ===============================
   TIMELINE DATA
   =============================== */
const timelineData = [
    { dateText: "12 ธ.ค. 68", title: "พ.ร.ฎ.ยุบสภาฯ มีผลบังคับใช้", desc: "พระราชกฤษฎีกายุบสภาผู้แทนราษฎร พ.ศ.2568 เริ่มมีผล", startDate: new Date("2025-12-12T00:00:00"), endDate: new Date("2025-12-12T23:59:59") },
    { dateText: "15 ธ.ค. 68", title: "กกต. ประกาศให้มีการเลือกตั้ง", desc: "", startDate: new Date("2025-12-15T00:00:00"), endDate: new Date("2025-12-15T23:59:59") },
    { dateText: "20 ธ.ค. 68 - 5 ม.ค. 69", title: "ลงทะเบียนเลือกตั้งล่วงหน้า", desc: "ทั้งในเขต นอกเขต และนอกราชอาณาจักร", startDate: new Date("2025-12-20T00:00:00"), endDate: new Date("2026-01-05T23:59:59") },
    { dateText: "27-31 ธ.ค. 68", title: "รับสมัคร สส. แบ่งเขต", desc: "เวลา 08.30-16.30 น. ณ อาคารกีฬาเวสน์ 2", startDate: new Date("2025-12-27T08:30:00"), endDate: new Date("2025-12-31T16:30:00") },
    { dateText: "7 ม.ค. 69", title: "ประกาศรายชื่อผู้สมัคร", desc: "ทั้งแบบแบ่งเขต และแบบบัญชีรายชื่อ", startDate: new Date("2026-01-07T00:00:00"), endDate: new Date("2026-01-07T23:59:59") },
    { dateText: "18 ม.ค. 69", title: "แจ้งรายชื่อผู้มีสิทธิ์", desc: "นายทะเบียนแจ้งรายชื่อผู้มีสิทธิ์เลือกตั้งไปยังเจ้าบ้าน", startDate: new Date("2026-01-18T00:00:00"), endDate: new Date("2026-01-18T23:59:59") },
    { dateText: "1 ก.พ. 69", title: "วันเลือกตั้งล่วงหน้า", desc: "(08.00-17.00 น.) ทั้งใน/นอกเขต และผู้พิการ/ผู้สูงอายุ", startDate: new Date("2026-02-01T08:00:00"), endDate: new Date("2026-02-01T17:00:00") },
    { dateText: "8 ก.พ. 69", title: "⭐ วันเลือกตั้ง ⭐", desc: "(08.00-17.00 น.) โปรดเตรียมบัตรประชาชน", startDate: new Date("2026-02-08T08:00:00"), endDate: new Date("2026-02-08T17:00:00") }
];

/* ===============================
   UNIT DATA (พิกัดจริง เขตหนองแขม)
   =============================== */
const units = [
    // --- แขวงหนองแขม ---
    { id: 1, name: "โรงเรียนวัดหนองแขม (สหราษฎร์บูรณะ)", unit_count: "5 หน่วย", details_range: "แขวงหนองแขม หน่วยที่ 1-5", location_type: "ภายในอาคาร", note: "อาคารเรียน 1 ชั้นล่าง", lat: 13.695500, lng: 100.345200, images: ["https://placehold.co/600x400?text=Wat+Nong+Khaem+School"] },
    { id: 2, name: "เต็นท์บริเวณลานจอดรถ สน.หนองแขม", unit_count: "2 หน่วย", details_range: "แขวงหนองแขม หน่วยที่ 6-7", location_type: "ภายนอกอาคาร", note: "หน้าสถานีตำรวจ", lat: 13.693800, lng: 100.349500, images: ["https://placehold.co/600x400?text=Police+Station"] },
    { id: 3, name: "โรงเรียนประชาบำรุง", unit_count: "3 หน่วย", details_range: "แขวงหนองแขม หน่วยที่ 8-10", location_type: "ภายในอาคาร", note: "โรงอาหาร", lat: 13.682500, lng: 100.355000, images: ["https://placehold.co/600x400?text=Pracha+Bamrung"] },
    { id: 4, name: "หมู่บ้านสินสมบูรณ์", unit_count: "2 หน่วย", details_range: "แขวงหนองแขม หน่วยที่ 11-12", location_type: "ภายนอกอาคาร", note: "ลานอเนกประสงค์กลางหมู่บ้าน", lat: 13.690500, lng: 100.339200, images: ["https://placehold.co/600x400?text=Sinsomboon"] },
    { id: 5, name: "สำนักงานเขตหนองแขม", unit_count: "1 หน่วย", details_range: "แขวงหนองแขม หน่วยที่ 13", location_type: "ภายในอาคาร", note: "โถงชั้นล่าง อาคาร 2", lat: 13.704200, lng: 100.358700, images: ["https://placehold.co/600x400?text=District+Office"] },
    { id: 6, name: "โรงเรียนจันทราพันธ์ศุข", unit_count: "2 หน่วย", details_range: "แขวงหนองแขม หน่วยที่ 14-15", location_type: "ภายในอาคาร", note: "อาคารอนุบาล", lat: 13.698000, lng: 100.348000, images: ["https://placehold.co/600x400?text=Chantra+Phansuk"] },
    { id: 7, name: "วัดหลักสาม", unit_count: "3 หน่วย", details_range: "แขวงหนองแขม หน่วยที่ 16-18", location_type: "ภายนอกอาคาร", note: "เต็นท์ลานวัด", lat: 13.690000, lng: 100.370000, images: ["https://placehold.co/600x400?text=Wat+Lak+Sam"] },

    // --- แขวงหนองค้างพลู ---
    { id: 8, name: "มหาวิทยาลัยเอเชียอาคเนย์", unit_count: "6 หน่วย", details_range: "แขวงหนองค้างพลู หน่วยที่ 1-6", location_type: "ภายในอาคาร", note: "อาคารพลกฤษณ ประโมทะกะ", lat: 13.705600, lng: 100.355200, images: ["https://placehold.co/600x400?text=SAU"] },
    { id: 9, name: "โรงเรียนวัดอุดมรังสี", unit_count: "4 หน่วย", details_range: "แขวงหนองค้างพลู หน่วยที่ 7-10", location_type: "ภายในอาคาร", note: "อาคารอเนกประสงค์", lat: 13.707200, lng: 100.351800, images: ["https://placehold.co/600x400?text=Wat+Udom"] },
    { id: 10, name: "หมู่บ้านหรรษา (เพชรเกษม 81)", unit_count: "3 หน่วย", details_range: "แขวงหนองค้างพลู หน่วยที่ 11-13", location_type: "ภายนอกอาคาร", note: "ลานสโมสรหมู่บ้าน", lat: 13.699500, lng: 100.334000, images: ["https://placehold.co/600x400?text=Hansa+Village"] },
    { id: 11, name: "ศูนย์การค้าวิคตอเรีย การ์เด้นส์", unit_count: "2 หน่วย", details_range: "แขวงหนองค้างพลู หน่วยที่ 14-15", location_type: "ภายนอกอาคาร", note: "ลานกิจกรรมด้านหน้า", lat: 13.703500, lng: 100.364200, images: ["https://placehold.co/600x400?text=Victoria"] },
    { id: 12, name: "โรงเรียนเลิศหล้า", unit_count: "2 หน่วย", details_range: "แขวงหนองค้างพลู หน่วยที่ 16-17", location_type: "ภายในอาคาร", note: "โรงยิมเนเซียม", lat: 13.701500, lng: 100.372500, images: ["https://placehold.co/600x400?text=Lertlah"] },
    { id: 13, name: "โรงพยาบาลวิชัยเวช อินเตอร์เนชั่นแนล", unit_count: "2 หน่วย", details_range: "แขวงหนองค้างพลู หน่วยที่ 18-19", location_type: "ภายนอกอาคาร", note: "ลานจอดรถด้านหลัง", lat: 13.704800, lng: 100.360100, images: ["https://placehold.co/600x400?text=Vichaivej"] },
    { id: 14, name: "ตลาดนัดอัศวิน", unit_count: "3 หน่วย", details_range: "แขวงหนองค้างพลู หน่วยที่ 20-22", location_type: "ภายนอกอาคาร", note: "เต็นท์ลานจอดรถ", lat: 13.712000, lng: 100.345000, images: ["https://placehold.co/600x400?text=Asawin+Market"] },
    { id: 15, name: "วิทยาลัยเทคโนโลยีหมู่บ้านครู", unit_count: "3 หน่วย", details_range: "แขวงหนองค้างพลู หน่วยที่ 23-25", location_type: "ภายในอาคาร", note: "หอประชุม", lat: 13.702000, lng: 100.368000, images: ["https://placehold.co/600x400?text=MBK+Tech"] }
];

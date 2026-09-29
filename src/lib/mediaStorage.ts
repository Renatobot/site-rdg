const DB_NAME = "rdg_custom_media_db";
const STORE_NAME = "lead_media";
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      return reject(new Error("IndexedDB not available"));
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveLeadCustomMedia(
  leadKey: string,
  data: { customHeroPhoto?: string; customGalleryPhotos?: string[] }
): Promise<void> {
  try {
    const db = await openDB();
    return new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      store.put(data, leadKey);
      store.put(data, "active_lead_media");
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (e) {
    console.error("Erro ao salvar mídia customizada no IndexedDB:", e);
  }
}

export async function getLeadCustomMedia(
  leadKey?: string
): Promise<{ customHeroPhoto?: string; customGalleryPhotos?: string[] } | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);

      const queryKey = leadKey || "active_lead_media";
      const req = store.get(queryKey);

      req.onsuccess = () => {
        if (req.result) {
          resolve(req.result);
        } else if (leadKey) {
          const fallbackReq = store.get("active_lead_media");
          fallbackReq.onsuccess = () => resolve(fallbackReq.result || null);
          fallbackReq.onerror = () => resolve(null);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch (e) {
    console.error("Erro ao ler mídia customizada do IndexedDB:", e);
    return null;
  }
}

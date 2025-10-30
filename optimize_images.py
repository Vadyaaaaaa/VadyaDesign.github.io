from pathlib import Path
from PIL import Image
import os
import sys


def optimize_folder(root_path: Path, max_width: int = 2000, min_bytes: int = 300 * 1024) -> int:
    exts = {".jpg", ".jpeg", ".png"}
    optimized = 0
    for p in root_path.rglob("*"):
        if p.suffix.lower() in exts and p.is_file():
            try:
                size_before = p.stat().st_size
                if size_before <= min_bytes:
                    continue
                img = Image.open(p)
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGB")
                w, h = img.size
                if w > max_width:
                    h = int(h * max_width / w)
                    img = img.resize((max_width, h), Image.LANCZOS)
                out_path = p if p.suffix.lower() in (".jpg", ".jpeg") else p.with_suffix(".jpg")
                img.save(out_path, optimize=True, quality=82)
                if out_path != p:
                    try:
                        os.remove(p)
                    except Exception:
                        pass
                size_after = out_path.stat().st_size
                optimized += 1
                print(f"Optimized: {out_path} | {size_before//1024}KB -> {size_after//1024}KB")
            except Exception as e:
                print("Skip:", p, e)
    return optimized


def main():
    if len(sys.argv) >= 2:
        root = Path(sys.argv[1])
    else:
        root = Path.home() / "Desktop" / "Портфолио"
    if not root.exists():
        print("Folder not found:", root)
        sys.exit(1)
    total = optimize_folder(root)
    print("Total optimized:", total)


if __name__ == "__main__":
    main()




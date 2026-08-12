import os
import fitz
import json
import math

pdf_dir = r"C:\Users\Marks\Downloads\TUDO\total"
out_dir = r"c:\Users\Marks\Documents\GitHub\Treinamento-Total-Trac\content\modules"

print("Reading PDFs...")
pdfs = [f for f in os.listdir(pdf_dir) if f.endswith('.pdf')]
all_text = ""
for p in pdfs:
    try:
        doc = fitz.open(os.path.join(pdf_dir, p))
        for page in doc:
            all_text += page.get_text() + "\n"
    except Exception as e:
        print(f"Error reading {p}: {e}")

print(f"Extracted {len(all_text)} characters.")

# chunk text into 20 parts
words = all_text.split()
chunk_size = max(1, math.ceil(len(words) / 20))
chunks = []
for i in range(0, len(words), chunk_size):
    chunks.append(" ".join(words[i:i+chunk_size]))

# If less than 20 chunks, pad them
while len(chunks) < 20:
    chunks.append("Informação adicional em elaboração...")
    
print(f"Divided into {len(chunks)} chunks.")

for i in range(20):
    mod_id = f"module-{i+1:02d}"
    mod_dir = os.path.join(out_dir, mod_id)
    os.makedirs(mod_dir, exist_ok=True)
    
    lesson_path = os.path.join(mod_dir, "lesson-01.md")
    with open(lesson_path, "w", encoding="utf-8") as f:
        f.write(f"# {mod_id} - Treinamento Total Trac\n\n## Conteúdo Extraído\n\n")
        f.write(chunks[i][:15000]) # write up to 15000 chars per module just in case
        
print("Successfully generated real content modules from PDFs.")

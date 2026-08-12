import os
import json

base_dir = r"c:\Users\Marks\Documents\GitHub\Treinamento-Total-Trac\content\modules"
knowledge_file = r"c:\Users\Marks\Documents\GitHub\Treinamento-Total-Trac\content\knowledge.json"
products_file = r"c:\Users\Marks\Documents\GitHub\Treinamento-Total-Trac\content\products.json"
quiz_bank_file = r"c:\Users\Marks\Documents\GitHub\Treinamento-Total-Trac\content\quiz-bank.json"

modules = []
for i in range(1, 21):
    mod_id = f"module-{i:02d}"
    modules.append(mod_id)
    
    mod_dir = os.path.join(base_dir, mod_id)
    os.makedirs(mod_dir, exist_ok=True)
    
    # lesson-01.md
    with open(os.path.join(mod_dir, "lesson-01.md"), "w", encoding="utf-8") as f:
        f.write(f"# {mod_id} - Introdução e Tecnologias\n\nEste módulo detalha as tecnologias do Imobilizador, Jornada 4G, e Kit Autonomia com base nos materiais oficiais da Total Trac.\n\n## Conteúdo\n- Integração 4G\n- Telemetria de frotas e segurança\n- Regras operacionais\n")
        
    # quiz.json
    with open(os.path.join(mod_dir, "quiz.json"), "w", encoding="utf-8") as f:
        json.dump({
            "id": f"quiz-{mod_id}",
            "questions": [
                {
                    "question": f"Qual a principal tecnologia abordada no {mod_id}?",
                    "options": ["Telemetria 4G e Imobilizadores", "Rede 3G obsoleta", "Nenhuma das anteriores"],
                    "answer": 0
                }
            ]
        }, f, indent=4, ensure_ascii=False)
        
    # references.json
    with open(os.path.join(mod_dir, "references.json"), "w", encoding="utf-8") as f:
        json.dump({
            "id": f"ref-{mod_id}",
            "documents": ["Imobilizador.pdf", "Jornada 4G.pdf", "Kit Autonomia.pdf"]
        }, f, indent=4, ensure_ascii=False)

with open(knowledge_file, "w", encoding="utf-8") as f:
    json.dump([{"id": f"knowledge-{m}", "module": m, "title": f"Treinamento {m}"} for m in modules], f, indent=4, ensure_ascii=False)

with open(products_file, "w", encoding="utf-8") as f:
    json.dump([{"id": f"prod-{m}", "module": m, "product": "Total Trac 4G", "features": ["Imobilizador", "Kit Autonomia"]} for m in modules], f, indent=4, ensure_ascii=False)
    
with open(quiz_bank_file, "w", encoding="utf-8") as f:
    json.dump([{"id": f"quiz-{m}", "module": m, "questions_count": 1} for m in modules], f, indent=4, ensure_ascii=False)

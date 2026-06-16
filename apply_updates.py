import re
with open('src/routes/index.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Add stagger import (check if already added)
import_needle = 'import { useStaggerReveal, staggerItemStyle } from "@/hooks/useStaggerReveal"'
if import_needle not in c:
    # Insert after the last import from components
    last_import = c.rfind('import { ScrollProgress')
    if last_import >= 0:
        end_of_line = c.find('\n', last_import)
        c = c[:end_of_line+1] + import_needle + '\n' + c[end_of_line+1:]
        print('Added import')
    else:
        print('Could not find insertion point')

# 2. Replace the Services function to add stagger
old_fn_header = 'function Services() {\n  return ('
new_fn_header = 'function Services() {\n  const { shown, containerRef } = useStaggerReveal({ staggerMs: 80 });\n  return ('
if old_fn_header in c:
    c = c.replace(old_fn_header, new_fn_header)
    print('Added hook to Services()')
else:
    print('ERROR: function header not found')

# 3. Add ref to the grid container
old_grid = 'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border"'
new_grid = 'ref={containerRef}\n          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border"'
if old_grid in c:
    c = c.replace(old_grid, new_grid)
    print('Added ref to grid')
else:
    print('ERROR: grid className not found')

# 4. Add staggerItemStyle to the card links
old_card = 'className="group relative bg-background p-8 lg:p-10 hover:bg-emerald-deep hover:text-ivory transition-colors duration-500 cursor-pointer min-h-[260px] flex flex-col justify-between"\n            >'
new_card = 'className="group relative bg-background p-8 lg:p-10 hover:bg-emerald-deep hover:text-ivory transition-colors duration-500 cursor-pointer min-h-[260px] flex flex-col justify-between"\n              style={staggerItemStyle(shown, idx, 80)}\n            >'
if old_card in c:
    c = c.replace(old_card, new_card)
    print('Added staggerItemStyle to cards')
else:
    print('ERROR: card className not found')

with open('src/routes/index.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

print('Done')

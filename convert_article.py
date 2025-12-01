import re

# Read the article content
with open('/home/ubuntu/upload/pasted_content.txt', 'r') as f:
    content = f.read()

# Remove the [Start ARTICLE_HTML exactly here] marker
content = content.replace('[Start ARTICLE_HTML exactly here]', '').strip()

# Extract the style section
style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
style_content = style_match.group(1) if style_match else ''

# Extract the article content (everything after </style>)
article_match = re.search(r'</style>\s*<div class="article-spaced">(.*?)</div>\s*$', content, re.DOTALL)
article_content = article_match.group(1) if article_match else content

# Save extracted content
with open('/home/ubuntu/hexaaway-net/article_style.css', 'w') as f:
    f.write(style_content)

with open('/home/ubuntu/hexaaway-net/article_content.html', 'w') as f:
    f.write(article_content)

print("Article converted successfully")

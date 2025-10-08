# Post Format Rules for LLMs

## Overview
This document defines the standard format for creating posts on this Jekyll-based website. All posts must follow this exact structure and formatting guidelines.

## File Structure and Naming

### File Naming Convention
- **Portuguese posts**: `YYYY-MM-DD-title_pt.md`
- **English posts**: `YYYY-MM-DD-title_en.md`
- Use hyphens to separate words in filenames
- Always include language suffix (`_pt` or `_en`)

### Directory Structure
- Place posts in appropriate subdirectories under `_posts/`
- Example: `_posts/basketball-posts/2025-06-09-nba-playoffs_pt.md`

## Front Matter (YAML Header)

### Required Fields
```yaml
---
layout: post
title: "Post Title in Quotes"
date: YYYY-MM-DD 00:00:00
description:
tags: Category1; Category2
categories: Category1; Category2
thumbnail: assets/img/Posts_Images/YYYY-MM-DD-post-title/image.jpg
author: Ace Laboratory Team - Author1, Author2
---
```

### Field Specifications
- **layout**: Always `post`
- **title**: Use double quotes, descriptive and engaging
- **date**: Format as `YYYY-MM-DD 00:00:00`
- **description**: Can be left empty or filled with brief summary
- **tags**: Semicolon-separated categories (e.g., "Basketball; Analysis")
- **categories**: Same as tags
- **thumbnail**: Path to main image, typically JPG/PNG
- **author**: Format as "Ace Laboratory Team - Author1, Author2"

## Content Structure

### 1. Header Section
After the front matter, include:
```markdown
---

<h2> <b> Introduction </b></h2>

<style>body {text-align: justify}</style>
```

### 2. Introduction
- Use `<h2> <b> Introduction </b></h2>` for Portuguese
- Use `<h2> <b> Introduction </b></h2>` for English
- Include `<style>body {text-align: justify}</style>` for justified text
- Write 2-4 paragraphs introducing the topic
- Provide context and background information

### 3. Main Content Sections
- Use `<h3><b>Section Title</b></h3>` for subsections
- Each section should be 2-4 paragraphs
- Include specific details, statistics, and analysis
- Use engaging narrative style

### 4. Images
For each image, use this exact format:
```html
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/YYYY-MM-DD-post-title/image.jpg" title="ImageTitle" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
```

### 5. Conclusion
- Use `<h2><b>Conclusion</b></h2>` for Portuguese
- Use `<h2><b>Conclusion</b></h2>` for English
- Summarize key points
- Provide final thoughts or analysis
- 2-3 paragraphs maximum

## Language Requirements

### Bilingual Content
- **MANDATORY**: Every Portuguese post must have an English version
- **MANDATORY**: Every English post must have a Portuguese version
- Both versions must follow identical structure and formatting
- Translate content accurately while maintaining the same narrative flow

### Translation Guidelines
- Maintain the same section structure in both languages
- Keep statistics and data identical
- Preserve the engaging, journalistic tone
- Ensure technical terms are properly translated
- Maintain the same image placement and captions

## Writing Style Guidelines

### Tone and Voice
- Use engaging, journalistic style
- Write in third person
- Use active voice when possible
- Include specific statistics and data
- Create narrative flow between sections

### Content Requirements
- Include specific details (scores, statistics, percentages)
- Use player names and team names consistently
- Provide context for events and situations
- Include quotes or references when relevant
- Maintain chronological order when describing events

### Formatting Rules
- Use `<b>` tags for bold text in headings
- Include proper spacing between sections
- Use em dashes (—) for parenthetical information
- Include specific statistics in parentheses
- Use proper HTML formatting for emphasis

## Image Guidelines

### Image Requirements
- Place all images in `assets/img/Posts_Images/YYYY-MM-DD-post-title/`
- Use descriptive filenames (e.g., `Game_1.jpg`, `Game_2.png`)
- Support formats: JPG, PNG, WebP
- Include images for each major section
- Use consistent naming convention

### Image Integration
- Include images after relevant content sections
- Use the exact HTML structure provided above
- Set `loading="eager"` for better performance
- Use descriptive titles for accessibility

## Quality Standards

### Content Quality
- Fact-check all statistics and data
- Ensure proper grammar and spelling
- Maintain consistent terminology
- Verify all player names and team names
- Include engaging narrative elements

### Technical Quality
- Validate all HTML syntax
- Ensure proper YAML front matter
- Check all image paths
- Verify consistent formatting
- Test markdown rendering

## Example Structure

```
---
layout: post
title: "Post Title"
date: 2025-06-09 00:00:00
description:
tags: Category1; Category2
categories: Category1; Category2
thumbnail: assets/img/Posts_Images/2025-06-09-post-title/main.jpg
author: Ace Laboratory Team - Author1, Author2
---

---

<h2> <b> Introduction </b></h2>

<style>body {text-align: justify}</style>

[Introduction content - 2-4 paragraphs]

<h3><b>Section 1</b></h3>

[Section content - 2-4 paragraphs]

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2025-06-09-post-title/image1.jpg" title="Image1" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

[Continue with more sections...]

<h2><b>Conclusion</b></h2>

[Conclusion content - 2-3 paragraphs]
```

## Final Notes

- Always create both Portuguese and English versions
- Maintain identical structure across both languages
- Follow the exact formatting specifications
- Include engaging, data-rich content
- Ensure proper image integration
- Validate all technical elements before publishing

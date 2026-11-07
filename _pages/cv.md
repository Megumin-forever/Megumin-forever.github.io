---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}
{% assign home = site.data.home.en %}

## Education

<div class="education-entry"
     style="display: grid; grid-template-columns: minmax(0, 1fr) min(200px, 38%); gap: 24px; align-items: center; margin-bottom: 32px;">
  <div>
    <strong>Tsinghua University</strong><br>
    Incoming Master's Student<br>
    Starting in 2027
  </div>
  <img src="{{ '/images/tsinghua-logo.png' | relative_url }}"
       alt="Tsinghua University"
       style="width: 100%; max-width: 200px; height: auto; display: block;">
</div>

<div class="education-entry"
     style="display: grid; grid-template-columns: minmax(0, 1fr) min(200px, 38%); gap: 24px; align-items: center; margin-bottom: 32px;">
  <div>
    <strong>{{ home.education.school }}</strong><br>
    {{ home.education.college }}<br>
    {{ home.education.period }}
  </div>
  <img src="{{ home.education.badge | prepend: base_path }}"
       alt="{{ home.education.badge_alt }}"
       style="width: 100%; max-width: 200px; height: auto; display: block;">
</div>

## Research Experience

<div class="education-entry">
  <div>
    <strong>Tsinghua University</strong><br>
    Research Intern<br>
    2026 – Present
  </div>
</div>

## Honors & Awards

{% if home.awards %}
<div class="awards-list">
  {% for award in home.awards %}
  <div style="margin-bottom: 18px;">
    <strong>{{ award.name }}</strong><br>
    <span style="font-size: 0.9em; opacity: 0.8;">
      {{ award.academic_year }} · {{ award.issuer }}
    </span>
    {% if award.description %}
    <div style="font-size: 0.88em; margin-top: 4px;">
      {{ award.description }}
    </div>
    {% endif %}
  </div>
  {% endfor %}
</div>
{% endif %}

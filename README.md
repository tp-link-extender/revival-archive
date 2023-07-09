# revival-archive

Revival archive website

# Pages/posts

To make a post, place it into the /pages directory. The filename will be used as the URL slug. The file must be in Markdown and contain a json header, like the following:

```json
{
	"title": "First blog post",
	"date": "2023-07-06 7:29 PM"
}
```

A Revival description must include a "---" line between a short overview and the full post. A json header for a Revival could contain the following fields:

```json
{
	"name": "Mercury",
	"date": "2023-07-09 01:58 PM",
	"clients": [2013],
	"rating": 5
}
```

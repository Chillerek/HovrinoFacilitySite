<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Archive entries use bilingual blocks in `src/data/documents.ts` and the shared language switch, keeping translations aligned.
- Document corruption defaults to enabled; explicit `corrupted: false` preserves readable supplied research without changing legacy archive files.
- Documentation typography is scoped through Layout's contentClassName so other institutional pages retain their existing appearance.
- Optional document passwords gate individual archive entries after archive access; these remain frontend-only ARG puzzle gates, not security controls.
- Archive recordings use optional bilingual labels and CDN asset pointers in document data, rendered only after document access is granted.

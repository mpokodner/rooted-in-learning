alter table public.newsletter_subscribers
  add column if not exists guide_sequence_step integer not null default 0;

comment on column public.newsletter_subscribers.guide_sequence_step is
  'Guide email sequence: 0 not started, 1 welcome sent, 2 AI note sent, 3 HQIM note sent.';

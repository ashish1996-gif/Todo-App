-- Enable the pgcrypto extension if it is not already enabled.
-- Supabase may already provide gen_random_uuid(), but this ensures it.
create extension if not exists pgcrypto;

create table if not exists users (
  id uuid default gen_random_uuid() primary key,
  first_name text not null,
  last_name text not null,
  email text not null unique,
  password text not null,
  gender text,
  accepted_terms boolean not null default false,
  created_at timestamptz not null default now()
);

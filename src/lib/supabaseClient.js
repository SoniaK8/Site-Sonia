import { createClient } from '@supabase/auth-helpers-sveltekit';

export const supabase = createClient(
	'https://usggocdkjmywenayrpsa.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzZ2dvY2Rram15d2VuYXlycHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwODExMTksImV4cCI6MTk4MTY1NzExOX0.3f7MustHF3hkLQ58ME2Nih3b4-4yU4GhiMNQEa1lJGo'
);

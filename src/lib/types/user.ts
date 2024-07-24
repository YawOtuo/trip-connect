// types/user.ts
export interface User {
  id?: number | undefined; // Update the type of id to be number | undefined
  username?: string | null;
  email?: string | null;
  uid?: string | null;
  date_of_birth?: string | null;
  phone_number?: string | null;
  country_of_origin?: string | null;
  contact_address?: string | null;
  drivers_license_number?: string | null;
  ghana_card_number?: string | null;
  created_at?: string | null
  // Add other user fields as necessary
}

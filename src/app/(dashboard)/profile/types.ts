/**
 * Shared value types for the /profile page and its co-located editors.
 * Split out of page.tsx (Golden Rule file-size split, 2026-07-14) so every
 * editor file can import these without depending on page.tsx itself.
 */

export type BasicInfoValues = {
  fullName: string;
  dateOfBirthIso: string;
  gender: "Male" | "Female" | "Prefer not to say";
};

export type ResidenceValues = {
  country: string;
  state: string;
  city: string;
};

export type PhoneEntry = {
  id: string;
  number: string;
  primary: boolean;
  /** Consent to show this number on public listings/profile. Defaults to
   *  false — buyers reach the seller via Chat until explicitly opted in. */
  visibleToBuyers: boolean;
};

export type ContactValues = {
  email: string;
  emailVerified: boolean;
  phones: PhoneEntry[];
};

export type SavedLocation = {
  id: number;
  flagCode: string; // ISO 3166-1 alpha-2 lowercase, e.g. "sg", "gb", "in"
  city: string;
  region: string;
  country: string;
  primary?: boolean;
};

export type ConnectedAccountProvider = "google" | "apple" | "magic_link";

export type ConnectedAccountStatus = "connected" | "not_connected";

export type ConnectedAccount = {
  provider: ConnectedAccountProvider;
  status: ConnectedAccountStatus;
  maskedIdentifier: string | null;
  linkedAtIso: string | null;
  lastUsedLabel: string | null;
  isPrimary: boolean;
};

/**
 * Shape returned by `getCurrentUser()` (src/app/actions/getCurrentUser.ts) —
 * the real, DB-backed user record for the signed-in account. This is the
 * server-fetched source of truth that ProfilePageScreen seeds its local
 * editor state from (replacing the old hardcoded mock values).
 */
export type ProfileUser = {
  id: string;
  profileId: string; // maps to User.userId — used as the public @handle
  username: string;
  fullName: string;
  dateOfBirth: string; // ISO yyyy-mm-dd
  gender: string;
  nationality: string;
  residency: string;
  email: string;
  primaryNumber: string;
  secondaryNumber1: string;
  secondaryNumber2: string;
  role: string;
  roleTitle: string;
  roleDescription: string;
  image: string;
  marketingOptIn: boolean;
  locality: string;
  address: {
    country: string;
    state: string;
    city: string;
    postalCode: string;
  };
};

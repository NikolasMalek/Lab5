# Lab 5 

**Name:** Nikolas Malek

**GitHub Pages link (expose):** *(will fill in at the end)*

**GitHub Pages link (explore):** *(will fill in at the end)*


## Check Your Understanding

1) Would you use a unit test to test the "message" feature of a messaging application? Why or why not?

No, I would not use a unit test alone for the "message" feature. Sending a message involves multiple integrated parts — input handling on the sender side, network transmission, server processing, and delivery to the receiver — so this is better suited to an integration or end-to-end test. Unit tests focus on isolated functions, and the "message" feature depends on too many interacting components for a unit test to verify it meaningfully.

2) Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not?

Yes, this is a good candidate for a unit test. The "max message length" feature is a small, self-contained piece of logic — given an input string, it returns whether the message is allowed (≤ 80 characters) or not. It has no external dependencies, so it can be tested in isolation with a variety of edge cases (0 chars, 80 chars, 81 chars, etc.) very quickly.
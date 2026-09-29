"""Registers every drawing rule. Rule modules are imported for their side effects."""
from . import rules_blocks  # noqa: F401
from . import rules_ui  # noqa: F401
from . import rules_text  # noqa: F401
from . import rules_images  # noqa: F401
from . import rules_anim  # noqa: F401
from . import rules_prerender  # noqa: F401
